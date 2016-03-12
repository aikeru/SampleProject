import * as httpRequest from './httpRequest.jsx';

const host = process.env.EVALUATOR_HOST || 'localhost';
const port = process.env.EVALUATOR_PORT || '8001';

export function evaluateExpression(expressionStr, callBack, _httpRequest = httpRequest) {
    _httpRequest.get({
        host: host,
        port: port,
        path: '/?' + expressionStr
    }, callBack);
}
