# John online

The static site connects to `https://bma-john.sneeuwpio.workers.dev/api/john` in production. Localhost retains `http://127.0.0.1:8787` for local development.

## Deploy

- Entry: `server/worker.mjs`, configured in `wrangler.jsonc`.
- Shared handler and business context: `server/john.mjs` and `server/john-knowledge.mjs`.
- Run `npx wrangler deploy` after changes to the server or knowledge.
- Store `OPENAI_API_KEY` only as a Cloudflare Worker secret using `npx wrangler secret put OPENAI_API_KEY`. Never commit or embed the key.
- Model: `gpt-6-luna`. NL/EN follows the site's selected language.
- Requests have input limits, origin checks, per-isolate rate limits and an upstream timeout. Prompts and answers are not logged by the application; OpenAI storage is disabled in the request.
- Check `/api/john-status` for configuration and send a short question to `/api/john` to confirm real answers. A configured status alone does not prove valid billing or model access.

Frontend changes publish through the existing Git workflow. The server runs on Cloudflare and does not depend on a laptop.
