import should from 'should';
import {evaluateExpression} from '../../generator/modules/evaluatorService.jsx';

describe("evaluatorService.parseExpression", () => {
    it('should call httpRequest.get and invoke callback with response', () => {
        let callBackCalled = 0,
            getCalled = 0,
            expectedResponse = 'foo',
            responseReceived = null;
        evaluateExpression('3+4=', (response) => {
            callBackCalled++;
            responseReceived = response;
        }, {
            get: (args, callBack) => {
                getCalled++;
                callBack(expectedResponse);
            }
        });

        should(callBackCalled).equal(1);
        should(getCalled).equal(1);
        should(responseReceived).equal('foo');
    });
});

