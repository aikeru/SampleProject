import * as expressions from './expressions.jsx';
import {log, logLevels} from '../../shared/logger.jsx';

export default class ExpressionRequestHandler {
    constructor() {
        this.expressions = expressions;
        this.handleRequest = this.handleRequest.bind(this);
    }

    handleRequest(request, response) {
        if (request.url === '/favicon.ico') {
            //Silly browsers
            response.end();
            return;
        }
        let queryString = request.url.substring(request.url.indexOf('?') + 1);
        let expression = this.expressions.parseExpression(queryString);
        log(logLevels.INFO, 'Received request to process', expression.left, expression.operator, expression.right);
        let result = this.expressions.evaluateExpression(expression);
        log(logLevels.INFO, 'Sending result', result);
        response.end('' + result);
    }
}
