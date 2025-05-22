const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello from CI pipeline server!');
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});