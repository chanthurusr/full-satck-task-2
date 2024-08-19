const http = require('http');

const requestHandler = (request, response) => {
    const { method, url } = request;

    response.setHeader('Content-Type', 'text/plain');

    if (method === 'GET' && url === '/') {
        response.writeHead(200);
        response.end('Hello, this is a GET request!');
    } else if (method === 'POST' && url === '/') {
        response.writeHead(200);
        response.end('Received a POST request');
    } else if (method === 'PUT' && url === '/') {
        response.writeHead(200);
        response.end('Received a PUT request');
    } else if (method === 'DELETE' && url === '/') {
        response.writeHead(200);
        response.end('Received a DELETE request');
    } else if (method === 'GET' && url === '/about') {
        response.writeHead(200);
        response.end('This is the about page.');
    } else if (method === 'GET' && url === '/contact') {
        response.writeHead(200);
        response.end('This is the contact page.');
    } else {
        response.writeHead(404);
        response.end('Not Found');
    }
};

const server = http.createServer(requestHandler);

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
