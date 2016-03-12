import {generateExpression} from './expressions.jsx';

let delay = 20;

export function nextExpression(_generateExpression = generateExpression, _delay = delay) {
    return new Promise((resolve, reject) => {
        let expression = _generateExpression();
        setTimeout(() => {
            resolve(expression);
        }, _delay);
    });
}
