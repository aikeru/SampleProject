import {get} from '../../generator/modules/httpRequest.jsx';
import should from 'should';

let mockHttp = {
    get: (options, responseFn) => {
        let subscriptions = {};
        let mockResponse = {
            on: (eventName, callBack) => {
                subscriptions[eventName] = callBack;
            }
        };

        setTimeout(() => {
            subscriptions["data"]('foo');
            subscriptions["data"]('bar');
            subscriptions["end"]();
        }, 10);

        responseFn(mockResponse);
    }
};

describe('httpRequest.get', () => {

    it('should call get and return combined data', (done) => {
        let expectedResult = 'foobar';
        get({
            host: 'fake.com',
            port: 1337,
            path: 'baz/buzz'
        }, (body) => {
            should(body).equal(expectedResult);
            done();
        }, mockHttp);
    });

});

