import { multiply } from "./multiply";

describe('Multiply test suite', () => {
    it('should multiply 2 numbers and return their product', () => {
        //given 2 numbers
        const num1: number = 2;
        const num2: number = 4;
        //when calling multiply function that takes those 2 numbers as inputs
        const result = multiply(num1, num2);
        //then it should return the result of multiplication
        expect(result).toEqual(8);
    });
});