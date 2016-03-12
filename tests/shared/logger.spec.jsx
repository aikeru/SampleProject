import {logLevels, setLogLevel, log} from '../../shared/logger.jsx';
import should from 'should';

describe('logger.setLogLevel', () => {
    it('should allow to change logLevel', () => {
        setLogLevel(logLevels.NONE);
    });

    it('should allow to send debug level messages', () => {
        setLogLevel(logLevels.NONE); //Don't really want messages output during testing
        log(logLevels.DEBUG, 'test message');
    });
});
