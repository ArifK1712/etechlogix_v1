import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import handler from './api/contact.ts';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const token =
    env.POSTMARK_SERVER_TOKEN ||
    env.POSTMARK_API_TOKEN ||
    env.POSTMARK_API_KEY ||
    env.POSTMARK_TOKEN ||
    env.POSTMARK_SERVER_API_TOKEN ||
    process.env.POSTMARK_SERVER_TOKEN ||
    process.env.POSTMARK_API_TOKEN ||
    process.env.POSTMARK_API_KEY ||
    process.env.POSTMARK_TOKEN;

  if (token) {
    process.env.POSTMARK_SERVER_TOKEN = token;
  }

  process.env.POSTMARK_FROM_EMAIL =
    env.FROM_EMAIL ||
    env.POSTMARK_FROM_EMAIL ||
    env.POSTMARK_FROM ||
    env.POSTMARK_SENDER_EMAIL ||
    'noreply@congenie.com';

  process.env.POSTMARK_TO_EMAIL =
    env.TO_EMAIL ||
    env.POSTMARK_TO_EMAIL ||
    env.POSTMARK_TO ||
    env.POSTMARK_RECIPIENT_EMAIL ||
    'arif@letuscode.com';

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'api-contact-middleware',
        configureServer(server) {
          server.middlewares.use('/api/contact', async (req, res) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', (chunk: any) => {
                body += chunk;
              });
              req.on('end', async () => {
                try {
                  const parsed = body ? JSON.parse(body) : {};
                  (req as any).body = parsed;
                  const mockRes = {
                    status(code: number) {
                      res.statusCode = code;
                      return mockRes;
                    },
                    setHeader(name: string, val: any) {
                      res.setHeader(name, val);
                    },
                    json(data: any) {
                      res.setHeader('Content-Type', 'application/json');
                      res.end(JSON.stringify(data));
                    },
                  };
                  await handler(req, mockRes);
                } catch (e: any) {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: false, error: e.message }));
                }
              });
            } else {
              res.statusCode = 405;
              res.end('Method Not Allowed');
            }
          });
        },
      },
    ],
  };
});
