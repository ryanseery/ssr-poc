import { createRequestHandler } from 'expo-server/adapter/bun';
import path from 'node:path';

const SERVER_ROOT = path.join(process.cwd(), 'dist/server');
const STATIC_ROOT = path.join(process.cwd(), 'dist/client');

const handleRequest = createRequestHandler({
  build: SERVER_ROOT,
  environment: 'staging',
});

// GOT to be a better way
function getContentType(file: Bun.BunFile): string {
  const ext = file.type;
  if (ext === '.js') return 'application/javascript';
  if (ext === '.css') return 'text/css';
  if (ext === '.html') return 'text/html';
  if (ext === '.json') return 'application/json';
  if (ext === '.ico') return 'image/x-icon';
  if (ext === '.png') return 'image/png';
  if (ext === '.jpg' || ext === '.jpeg') return 'image/jpeg';
  if (ext === '.svg') return 'image/svg+xml';
  return 'application/octet-stream';
}

Bun.serve({
  port: 3000,
  async fetch(request) {
    const url = new URL(request.url);
    const filePath = path.join(STATIC_ROOT, url.pathname);
    const file = Bun.file(filePath);

    if (url.pathname !== '/' && (await file.exists())) {
      const isHtml = url.pathname.endsWith('.html');
      return new Response(file, {
        headers: {
          'Content-Type': getContentType(file),
          'Cache-Control': isHtml
            ? 'no-cache'
            : 'public, max-age=31536000, immutable',
        },
      });
    }

    return await handleRequest(request);
  },
});

console.log('server: http://localhost:3000');
