const { createServer } = require('http');
const next = require('next');
const path = require('path');

// Under cPanel / Passenger, process.env.PORT can be a Unix socket path string.
// For local development or standard hosting, it's a numeric string.
const portOrSocket = process.env.PORT || '3000';
const isNumericPort = /^\d+$/.test(portOrSocket);
const port = isNumericPort ? parseInt(portOrSocket, 10) : 3000;
const host = process.env.HOST || '0.0.0.0';
const dev = process.env.NODE_ENV !== 'production';

// Configure Next.js
const app = next({
  dev,
  hostname: host,
  port: isNumericPort ? port : undefined,
  dir: path.join(__dirname)
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    handle(req, res);
  });

  if (isNumericPort) {
    server.listen(port, host, () => {
      const protocol = process.env.PROTOCOL || 'http';
      console.log(`> Ready on ${protocol}://${host}:${port}`);
      console.log(`> NODE_ENV: ${process.env.NODE_ENV}`);
      console.log(`> App directory: ${__dirname}`);
    });
  } else {
    // Under cPanel / Passenger, listen directly on the socket path string and DO NOT pass the host parameter
    server.listen(portOrSocket, () => {
      console.log(`> Ready on Unix Socket: ${portOrSocket}`);
      console.log(`> NODE_ENV: ${process.env.NODE_ENV}`);
      console.log(`> App directory: ${__dirname}`);
    });
  }
}).catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

