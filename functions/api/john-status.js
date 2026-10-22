import { createJohnHandler } from '../../server/john.mjs';

const handleJohn = createJohnHandler();

export function onRequest({ request, env }) {
  return handleJohn(request, env);
}
