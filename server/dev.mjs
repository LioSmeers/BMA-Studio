import { createServer } from 'node:http';
import { Readable } from 'node:stream';
import { readFile } from 'node:fs/promises';
import { homedir } from 'node:os';
import path from 'node:path';
import { createJohnHandler } from './john.mjs';

const port = Number(process.env.JOHN_PORT || 8787);
const secretFile = process.env.JOHN_SECRET_FILE || path.join(homedir(), '.config', 'bma-studio', 'john.env');
const handleJohn = createJohnHandler();

async function configuration() {
  let key = process.env.OPENAI_API_KEY || '';
  if (!key) {
    try {
      const config = await readFile(secretFile, 'utf8');
      const line = config.match(/^\s*OPENAI_API_KEY\s*=\s*([^\r\n]*)/m)?.[1]?.trim() || '';
      key = line.replace(/^(["'])(.*)\1$/, '$2');
    } catch (error) {
      if (error.code !== 'ENOENT') console.warn('John: private configuratie kon niet worden gelezen.');
    }
  }
  return { OPENAI_API_KEY: key, JOHN_ALLOWED_ORIGINS: process.env.JOHN_ALLOWED_ORIGINS || '' };
}

const server = createServer(async (incoming, outgoing) => {
  const controller = new AbortController();
  incoming.on('aborted', () => controller.abort());
  outgoing.on('close', () => { if (!outgoing.writableEnded) controller.abort(); });
  try {
    const headers = new Headers();
    for (const [key, value] of Object.entries(incoming.headers)) {
      if (value !== undefined) headers.set(key, Array.isArray(value) ? value.join(', ') : value);
    }
    const method = incoming.method || 'GET';
    const request = new Request(new URL(incoming.url, `http://127.0.0.1:${port}`), {
      method, headers, signal: controller.signal,
      ...(!['GET', 'HEAD'].includes(method) ? { body: Readable.toWeb(incoming), duplex: 'half' } : {}),
    });
    const response = await handleJohn(request, await configuration(), { ip: incoming.socket.remoteAddress });
    outgoing.writeHead(response.status, Object.fromEntries(response.headers));
    outgoing.end(Buffer.from(await response.arrayBuffer()));
  } catch {
    if (!outgoing.headersSent) outgoing.writeHead(500, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
    outgoing.end(JSON.stringify({ error: 'ai_unavailable' }));
  }
});

server.requestTimeout = 30_000;
server.headersTimeout = 10_000;
server.on('error', error => {
  console.error(error.code === 'EADDRINUSE' ? `John: poort ${port} is al in gebruik.` : 'John: de lokale API kon niet starten.');
  process.exitCode = 1;
});
server.listen(port, '127.0.0.1', async () => {
  const env = await configuration();
  console.log(`John API: http://127.0.0.1:${port}/api/john`);
  console.log(`Model: gpt-6-luna · API-sleutel ${env.OPENAI_API_KEY ? 'ingesteld' : 'nog niet ingesteld'}`);
  console.log('De websitepreview blijft op http://localhost:4173/ staan.');
});
