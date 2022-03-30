import { addSeven } from './add-seven';

describe('Add seven test suite', () => {
    it('should sum 7 to a number', () => {
        //given a number
        const myNumber: number = 3;
        //when calling addSeven function with that number
        const result = addSeven(myNumber);
        //then it should return the number plus seven
        expect(result).toEqual(10)
    });
});