import {startTimer, stopTimer} from '../../shared/timer.jsx';
import should from 'should';

describe('timer.stopTimer', () => {
    it('should return a timespan', (done) => {
        startTimer();
        setTimeout(() => {
            let result = stopTimer('test');
            should(result).be.a.Number();
            done();
        }, 10);
    });
});
