import should from 'should';
import * as operators from '../../shared/operators.jsx';
import * as expressions from '../../evaluator/modules/expressions.jsx';

describe("expressions.parseExpression", () => {
    it('should parse an addition expression', () => {
        let result = expressions.parseExpression('3+4=');
        should(result.left).equal(3);
        should(result.right).equal(4);
        should(result.operator).equal(operators.byName.PLUS);
    });

    it('should parse a subtraction expression', () => {
        let result = expressions.parseExpression('4-4=');
        should(result.left).equal(4);
        should(result.right).equal(4);
        should(result.operator).equal(operators.byName.MINUS);
    });

    it('should parse a multiplication expression', () => {
        let result = expressions.parseExpression('4*4=');
        should(result.left).equal(4);
        should(result.right).equal(4);
        should(result.operator).equal(operators.byName.MULTIPLY);
    });

    it('should parse a division expression', () => {
        let result = expressions.parseExpression('4/4=');
        should(result.left).equal(4);
        should(result.right).equal(4);
        should(result.operator).equal(operators.byName.DIVIDE);
    });
});

describe("expressions.evaluateExpression", () => {
    it('should evaluate an addition expression', () => {
        let expression = expressions.parseExpression('3+4=');
        let result = expressions.evaluateExpression(expression);
        should(result).equal(7);
    });

    it('should evaluate a subtraction expression', () => {
        let expression = expressions.parseExpression('5-2=');
        let result = expressions.evaluateExpression(expression);
        should(result).equal(3);
    });

    it('should evaluate a division expression', () => {
        let expression = expressions.parseExpression('6/3=');
        let result = expressions.evaluateExpression(expression);
        should(result).equal(2);
    });

    it('should evaluate a multiplication expression', () => {
        let expression = expressions.parseExpression('5*2=');
        let result = expressions.evaluateExpression(expression);
        should(result).equal(10);
    });
});
