import ExpressionRequestHandler from '../../evaluator/modules/ExpressionRequestHandler.jsx';
import should from 'should';
import * as operators from '../../shared/operators.jsx'

describe("ExpressionRequestHandler.handleRequest", () => {

    let handler;

    beforeEach(() => {
        handler = new ExpressionRequestHandler();
    });

    it('should reject favicon', () => {
        let endCalled = 0;
        handler.handleRequest({
            url: '/favicon.ico'
        }, {
            end: () => {
                endCalled++;
            }
        });

        should(endCalled).equal(1);
    });

    //TODO: rewrite to shouldEach
    it('should invoke parse, evaluate and end on properly formed query string', () => {
        let parseCalled = 0,
            evaluateCalled = 0,
            endCalled = 0,
            left = 400,
            right = 123,
            expectedResult = "456",
            endResult = null;
        let handler = new ExpressionRequestHandler();

        handler.expressions = {
            parseExpression: () => {
                parseCalled++;
                return {
                    left: left,
                    operator: operators.byName.PLUS,
                    right: right
                };
            },
            evaluateExpression: () => {
                evaluateCalled++;
                return expectedResult;
            }
        };

        handler.handleRequest({
            url: '/?123+456='
        }, {
            end: (result) => {
                endCalled++;
                endResult = result;
            }
        });

        should(parseCalled).equal(1);
        should(evaluateCalled).equal(1);
        should(endCalled).equal(1);
        should(endResult).equal(expectedResult);
    });
});

