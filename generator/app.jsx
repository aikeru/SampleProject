import * as expressions from './modules/expressions.jsx';
//import {start, stop} from './modules/generator.jsx';
import {nextExpression} from './modules/generator.jsx';
import {evaluateExpression} from './modules/evaluatorService.jsx';
import {startTimer, stopTimer} from '../shared/timer.jsx';
import {log, logLevels} from '../shared/logger.jsx';

const delay = process.env.REQUEST_DELAY || 20;

let evaluateExpressionAsync = (expression) => new Promise((resolve, reject) => {
    evaluateExpression(expression, (response) => {
        resolve(response);
    });
});

async function loop() {
    log(logLevels.INFO, 'Generating a new expression ...');
    let expression = await nextExpression();
    log(logLevels.INFO, 'Asking server to evaluate ', expression);
    startTimer();
    let solution = await evaluateExpressionAsync(expression);
    stopTimer('time taken for solution');
    log(logLevels.INFO, 'Received solution ', solution);
    setTimeout(loop, delay);
}
loop();
