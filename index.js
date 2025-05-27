const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello from Jenkins CI/CD App!');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
