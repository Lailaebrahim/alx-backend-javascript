const http = require('http');

const app = http.createServer();
const Port = 1245;
const Host = 'localhost';

app.on('request', (_, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(Port, Host);

module.exports = app;
