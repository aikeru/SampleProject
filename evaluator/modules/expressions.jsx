import * as operators from './../../shared/operators.jsx';

export const numRegex = /[0-9]+/g;
export const operatorRegex = /\+|\/|\*|\-/;

export const evaluatorDictionary = {
    [operators.byName.PLUS]: (left, right) => left + right,
    [operators.byName.MINUS]: (left, right) => left - right,
    [operators.byName.DIVIDE]: (left, right) => left / right,
    [operators.byName.MULTIPLY]: (left, right) => left * right
};

export function parseExpression(strExpression) {
    if (!strExpression) {
        return {
            left: null,
            operator: null,
            right: null
        };
    }
    //ES5+ does not require radix for decimal
    let left = parseInt(numRegex.exec(strExpression));
    let right = parseInt(numRegex.exec(strExpression));
    //Find out which operator is being used
    //Not using .toString() since that would explode on null/undefined
    let operator = '' + operatorRegex.exec(strExpression);

    numRegex.lastIndex = 0;
    return {
        left: left,
        operator: operator,
        right: right
    };
}

export function evaluateExpression(expression) {
    return evaluatorDictionary[expression.operator](expression.left, expression.right);
}

