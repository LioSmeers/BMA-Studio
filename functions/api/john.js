import { createJohnHandler } from '../../server/john.mjs';

const handleJohn = createJohnHandler();

// Cloudflare Pages supplies OPENAI_API_KEY as a secret binding, never as a browser variable.
export function onRequest({ request, env }) {
  return handleJohn(request, env, { ip: request.headers.get('CF-Connecting-IP') || 'unknown' });
}
