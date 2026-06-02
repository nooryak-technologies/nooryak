const { createServer } = require('http');
const next = require('next');
const path = require('path');

const port = parseInt(process.env.PORT || '3000', 10);
const host = process.env.HOST || '0.0.0.0';
const dev = process.env.NODE_ENV !== 'production';

// Configure Next.js with proper hostname for cPanel
const app = next({
  dev,
  hostname: host,
  port,
  dir: path.join(__dirname)
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(port, host, () => {
    const protocol = process.env.PROTOCOL || 'http';
    console.log(`> Ready on ${protocol}://${host}:${port}`);
    console.log(`> NODE_ENV: ${process.env.NODE_ENV}`);
    console.log(`> App directory: ${__dirname}`);
  });
}).catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
