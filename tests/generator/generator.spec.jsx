import should from 'should';
import {nextExpression} from '../../generator/modules/generator.jsx';
import {generateExpression, expressionSuffix} from '../../generator/modules/expressions.jsx';

var numRegex = /[0-9]+/g;
var mockGenerateExpression = () => {
    return generateExpression(mockGetRandomInt);
};
let randomNumbers = 0;
let mockGetRandomInt = () => {
    randomNumbers++;
    return randomNumbers === 1 ? 5 : 10;
};

describe("generator", () => {

    beforeEach(() => {
        randomNumbers = 0;
    });
    it('should return a promise that resolves in an expression', (done) => {
        nextExpression(mockGenerateExpression, 10)
            .then((expression) => {
                try {
                    should(numRegex.exec(expression)[0]).equal('5');
                    should(numRegex.exec(expression)[0]).equal('10');
                    should(numRegex.exec(expression)).equal(null);
                } catch (e) {
                    return done(e);
                }
                done();
            });
    });
});

