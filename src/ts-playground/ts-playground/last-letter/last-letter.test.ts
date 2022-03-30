import { lastLetter } from './last-letter';
describe('Las letter test suite', () => {
    it('should take a string and return its last character', () => {
        //given a string
        const testString = 'abcd';
        //when calling lastLetter function that takes a string as an input
        const result = lastLetter(testString);
        //then return last character of this string
        expect(result).toEqual('d');
    });
});