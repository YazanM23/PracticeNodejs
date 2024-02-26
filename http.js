const http = require('http');
const server = http.createServer(
    (request, response) => {
        response.write('Welcome to response !');
        response.end();

    }
)
server.listen(8080);