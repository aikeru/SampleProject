import {getRandomInt, getRandomElement} from './../../shared/random.jsx';
import {byValue} from './../../shared/operators.jsx';

const operatorValues = Object.keys(byValue);

export const expressionSuffix = '=';
let minimum = 1,
    maximum = 1000;

export function generateExpression(_getRandomInt = getRandomInt, _getRandomElement = getRandomElement) {
    return _getRandomInt(minimum, maximum)
        + _getRandomElement(operatorValues)
        + _getRandomInt(minimum, maximum)
        + expressionSuffix;
}
