import { createJohnHandler } from './john.mjs';

const handleJohn = createJohnHandler();

export default {
  fetch(request, env) {
    return handleJohn(request, env, {
      ip: request.headers.get('CF-Connecting-IP') || 'unknown',
    });
  },
};
