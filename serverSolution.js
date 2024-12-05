const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  try {
    response.writeHead(200);
    const jsonData = {
      message: 'Hello from Node.js',
    };
    response.end(JSON.stringify(jsonData));
  } catch (error) {
    console.error('Error handling request:', error);
    response.writeHead(500, { 'Content-Type': 'text/plain' });
    response.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

// Handle server errors
server.on('error', (error) => {
  console.error('Server error:', error);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
  process.exit(1); // Graceful shutdown
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});