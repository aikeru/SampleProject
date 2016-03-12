import http from 'http';
import {log, logLevels} from '../../shared/logger.jsx';

const PORT = process.env.PORT || 8001;
let server;

function start(requestHandler) {
    server = http.createServer(requestHandler.handleRequest);
    server.listen(PORT, () => {
        log(logLevels.INFO, `Server listening on: http://localhost:${PORT}`);
    });
}

export default {
    start: start
}