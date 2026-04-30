/**
 * Local dev proxy — forwards /api requests to the serverless function logic.
 * This allows `npm start` to handle /api/contact without needing `vercel dev`.
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // In local dev, proxy /api/contact directly to the live backend
  // (the serverless function handles this in production)
  app.use(
    '/api/contact',
    createProxyMiddleware({
      target: process.env.BACKEND_URL || 'https://backend-ten-bice-40.vercel.app',
      changeOrigin: true,
      pathRewrite: { '^/api/contact': '/api/contact' },
      onProxyReq: (proxyReq) => {
        proxyReq.setHeader('X-API-Key', process.env.API_KEY || 'stratosport-api-key-2024');
      },
    })
  );
};
