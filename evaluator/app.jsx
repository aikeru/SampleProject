import server from './modules/server.jsx';
import ExpressionRequestHandler from './modules/ExpressionRequestHandler.jsx';

let handler = new ExpressionRequestHandler();
server.start(handler);
