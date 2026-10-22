import { JOHN_INSTRUCTIONS, JOHN_LINKS } from './john-knowledge.mjs';

export const JOHN_MODEL = 'gpt-6-luna';
export const MAX_BODY_BYTES = 24_576;
const DEFAULT_ORIGINS = ['https://bmastudio.be', 'https://www.bmastudio.be', 'http://localhost:4173', 'http://127.0.0.1:4173'];
const LINK_KEYS = ['none', ...Object.keys(JOHN_LINKS)];
const REPLY_SCHEMA = {
  type: 'object',
  properties: {
    answer: { type: 'string' },
    link_key: { type: 'string', enum: LINK_KEYS },
  },
  required: ['answer', 'link_key'],
  additionalProperties: false,
};

async function readBody(request) {
  if (Number(request.headers.get('content-length')) > MAX_BODY_BYTES) throw new RangeError();
  if (!request.body) throw new SyntaxError();
  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let bytes = 0;
  let text = '';
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > MAX_BODY_BYTES) {
        await reader.cancel();
        throw new RangeError();
      }
      text += decoder.decode(value, { stream: true });
    }
    return JSON.parse(text + decoder.decode());
  } finally {
    reader.releaseLock();
  }
}

function validMessages(messages) {
  if (!Array.isArray(messages) || !messages.length || messages.length > 12) return false;
  let length = 0;
  for (let i = 0; i < messages.length; i++) {
    const message = messages[i];
    if (!message || message.role !== (i % 2 ? 'assistant' : 'user') || typeof message.content !== 'string') return false;
    if (!message.content.trim() || message.content.length > (message.role === 'user' ? 500 : 2000)) return false;
    length += message.content.length;
  }
  return length <= 6000 && messages.at(-1).role === 'user';
}

// One handler is kept alive per server/isolate. No prompts, API keys or replies are logged.
export function createJohnHandler({ fetchImpl = globalThis.fetch, now = Date.now, timeoutMs = 22_000 } = {}) {
  const buckets = new Map();
  let globalBucket = { start: now(), count: 0 };

  function withinLimit(ip) {
    const time = now();
    for (const [key, bucket] of buckets) if (time - bucket.start >= 60_000) buckets.delete(key);
    if (time - globalBucket.start >= 60_000) globalBucket = { start: time, count: 0 };
    const bucket = buckets.get(ip) || { start: time, count: 0 };
    if (bucket.count >= 8 || globalBucket.count >= 60 || (!buckets.has(ip) && buckets.size >= 1000)) return false;
    bucket.count++;
    globalBucket.count++;
    buckets.set(ip, bucket);
    return true;
  }

  return async function handleJohn(request, env = {}, { ip = 'unknown' } = {}) {
    const url = new URL(request.url);
    const origin = request.headers.get('origin');
    const configuredOrigins = env.JOHN_ALLOWED_ORIGINS?.split(',').map(value => value.trim()).filter(Boolean) || [];
    const allowed = new Set([...DEFAULT_ORIGINS, ...configuredOrigins, url.origin]);
    const headers = new Headers({
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      Vary: 'Origin',
    });
    if (origin && allowed.has(origin)) headers.set('Access-Control-Allow-Origin', origin);
    const json = (body, status = 200, extraHeaders = {}) => new Response(JSON.stringify(body), {
      status, headers: { ...Object.fromEntries(headers), ...extraHeaders },
    });

    if (origin && !allowed.has(origin)) return json({ error: 'origin_not_allowed' }, 403);
    if (request.method === 'OPTIONS') {
      headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      headers.set('Access-Control-Allow-Headers', 'Content-Type');
      headers.set('Access-Control-Max-Age', '600');
      return new Response(null, { status: 204, headers });
    }
    if (url.pathname === '/api/john-status' && request.method === 'GET') {
      return json({ configured: Boolean(env.OPENAI_API_KEY?.trim()), model: JOHN_MODEL });
    }
    if (url.pathname !== '/api/john') return json({ error: 'not_found' }, 404);
    if (request.method !== 'POST') return json({ error: 'method_not_allowed' }, 405, { Allow: 'POST, OPTIONS' });
    if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) return json({ error: 'invalid_content_type' }, 415);

    let body;
    try {
      body = await readBody(request);
    } catch (error) {
      return json({ error: error instanceof RangeError ? 'request_too_large' : 'invalid_json' }, error instanceof RangeError ? 413 : 400);
    }
    if (!body || !validMessages(body.messages) || !['nl', 'en'].includes(body.language)) return json({ error: 'invalid_messages' }, 400);
    if (!env.OPENAI_API_KEY?.trim()) return json({ error: 'ai_not_configured' }, 503);
    if (!withinLimit(ip)) return json({ error: 'rate_limited' }, 429, { 'Retry-After': '60' });

    const controller = new AbortController();
    const abort = () => controller.abort();
    request.signal.addEventListener('abort', abort, { once: true });
    if (request.signal.aborted) controller.abort();
    const timer = setTimeout(abort, timeoutMs);
    try {
      const upstream = await fetchImpl('https://api.openai.com/v1/responses', {
        method: 'POST',
        headers: { Authorization: `Bearer ${env.OPENAI_API_KEY.trim()}`, 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          model: JOHN_MODEL,
          instructions: `${JOHN_INSTRUCTIONS}\nInterfacetaal: ${body.language === 'en' ? 'Engels' : 'Nederlands'}.`,
          input: body.messages.map(({ role, content }) => ({ role, content: content.trim() })),
          reasoning: { effort: 'none' },
          max_output_tokens: 700,
          store: false,
          text: { format: { type: 'json_schema', name: 'john_reply', strict: true, schema: REPLY_SCHEMA } },
        }),
      });
      if (!upstream.ok) return json({ error: upstream.status === 429 ? 'provider_limited' : 'ai_unavailable' }, upstream.status === 429 ? 429 : 502);
      const result = await upstream.json();
      if (result.status !== 'completed') return json({ error: 'ai_unavailable' }, 502);
      const output = (result.output || []).filter(item => item.type === 'message').flatMap(item => item.content || []);
      const text = output.filter(part => part.type === 'output_text' && typeof part.text === 'string').map(part => part.text).join('');
      let reply;
      try { reply = JSON.parse(text); } catch { return json({ error: 'invalid_reply' }, 502); }
      if (!reply || typeof reply.answer !== 'string' || !reply.answer.trim() || reply.answer.length > 2000 || !LINK_KEYS.includes(reply.link_key)) {
        return json({ error: 'invalid_reply' }, 502);
      }
      const link = JOHN_LINKS[reply.link_key];
      return json({ answer: reply.answer.trim(), link: link ? { href: link.href, label: link[body.language] } : null });
    } catch {
      return json({ error: controller.signal.aborted ? 'ai_timeout' : 'ai_unavailable' }, controller.signal.aborted ? 504 : 502);
    } finally {
      clearTimeout(timer);
      request.signal.removeEventListener('abort', abort);
    }
  };
}
