// const http = require('http');

import http from 'http';

const server = http.createServer((req, res) => {
  console.log("req.method--->",req.method)
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello, GET Request!' }));
  } else if (req.method === 'POST' && req.url === '/data') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ receivedData: body }));
    });
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
