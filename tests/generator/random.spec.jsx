import {getRandomInt, getRandomElement} from '../../shared/random.jsx';
import should from 'should';

describe('random.getRandomInt', () => {
    it('should accept two integers and return an integer', () => {
        let result = getRandomInt(1, 2);
        should(result).equal(Math.round(result));
    });

});

describe('random.getRandomElement', () => {
    it('should accept an array and return a member of the array', () => {
        const elements = [1, 2, 3];
        let result = getRandomElement(elements);
        should(result).be.equalOneOf(elements);
    });
});