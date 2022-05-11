const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
  if (request.method === 'GET' && request.url === '/') {
    const content = fs.readFileSync(path.join(__dirname, '..', 'index.html'));
    response.writeHead('200', {'Content-Type': 'text/html'});
    response.end(content);
  } else if (request.method === 'GET' && request.url === '/snake') {
    const content = fs.readFileSync(path.join(__dirname, '..', 'snakeClone-Phaser', 'game.html'));
    response.writeHead('200', {'Content-Type': 'text/html'});
    response.end(content);
  } else if (request.method === 'GET' && request.url === '/phaser-ce/build/phaser.js') {
    const content = fs.readFileSync(path.join(__dirname, '..', 'snakeClone-Phaser', 'node_modules', 'phaser', 'build', 'phaser.js'));
    response.writeHead('200', {'Content-Type': 'text/javascript'});
    response.end(content);
  } else if (request.method === 'GET' && request.url === '/game.js') {
    const content = fs.readFileSync(path.join(__dirname, '..', 'snakeClone-Phaser', 'game.js'));
    response.writeHead('200', {'Content-Type': 'text/javascript'});
    response.end(content);
  } else if (request.method === 'GET' && request.url === '/breakout') {
    const content = fs.readFileSync(path.join(__dirname, '..', 'breakout', 'breakout.html'));
    response.writeHead('200', {'Content-Type': 'text/html'});
    response.end(content);
  } else if (request.method === 'GET' && request.url === '/breakout.js') {
    const content = fs.readFileSync(path.join(__dirname, '..', 'breakout', 'breakout.js'));
    response.writeHead('200', {'Content-Type': 'text/javascript'});
    response.end(content);
  } else {
    response.writeHead('404');
    response.end("404 Error: Can't find destination.");
  }
});

server.listen(80);

module.exports = server;
