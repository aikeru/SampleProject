import should from 'should';
import {generateExpression, expressionSuffix} from '../../generator/modules/expressions.jsx';
import {byName} from '../../shared/operators.jsx';

const numRegex = /[0-9]+/g;

describe("expressions.generateExpression", () => {

    let randomIntCalled = 0;
    let randomElementCalled = 0;
    let mockGetRandomInt = () => {
        randomIntCalled++;
        return randomIntCalled === 1 ? 5 : 10;
    };
    let mockGetRandomElement = () => {
        randomElementCalled++;
        return byName.PLUS;
    };

    beforeEach(() => {
        randomIntCalled = 0;
        randomElementCalled = 0;
    });
    it('should generate a string with exactly two numbers', () => {
        let response = generateExpression(mockGetRandomInt);
        should(numRegex.exec(response)[0]).equal('5');
        should(numRegex.exec(response)[0]).equal('10');
        should(numRegex.exec(response)).equal(null);
    });

    it('should generate a string with exactly one suffix at the end', () => {
        let response = generateExpression(mockGetRandomInt);

        should(response[response.length - 1]).equal(expressionSuffix);
    });

    it('should pick two random numbers and one random operator', () => {
        generateExpression(mockGetRandomInt, mockGetRandomElement);
        should(randomIntCalled).equal(2);
        should(randomElementCalled).equal(1);
    });
});
