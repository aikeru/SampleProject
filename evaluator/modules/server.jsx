import http from 'http';

const PORT = process.env.PORT || 8001;
let server;

function start(requestHandler) {
    server = http.createServer(requestHandler.handleRequest);
    server.listen(PORT, () => {
        console.log(`Server listening on: http://localhost:${PORT}`);
    });
}

export default {
    start: start
}