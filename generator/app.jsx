import * as expressions from './modules/expressions.jsx';
//import {start, stop} from './modules/generator.jsx';
import {nextExpression} from './modules/generator.jsx';
import {evaluateExpression} from './modules/evaluatorService.jsx';
import {startTimer, stopTimer} from '../shared/timer.jsx';

const delay = process.env.REQUEST_DELAY || 20;

let evaluateExpressionAsync = (expression) => new Promise((resolve, reject) => {
    evaluateExpression(expression, (response) => {
        resolve(response);
    });
});

async function loop() {
    console.log('Generating a new expression ...');
    let expression = await nextExpression();
    console.log('Asking server to evaluate ', expression);
    startTimer();
    let solution = await evaluateExpressionAsync(expression);
    stopTimer('time taken for solution');
    console.log('Received solution ', solution);
    setTimeout(loop, delay);
}
loop();
