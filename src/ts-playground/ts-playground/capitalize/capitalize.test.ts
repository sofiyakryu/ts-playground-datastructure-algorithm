import { capitalize } from './capitalize';
describe('Capitalize test suite', () => {
    it('should take a string of all lower cases and capitalize its first letter', () => {
        //given a string
        const alllowercase: string = 'lowercase';
        //when calling capitalize function that takes this string as an input
        const result = capitalize(alllowercase);
        //then return a string with only the first letter capitalized
        expect(result).toEqual('Lowercase');
    });

    it('should take a string of all upper cases and capitalize its first letter', () => {
        //given a string
        const allUPPERCASE: string = 'UPPERCASE';
        //when calling capitalize function that takes this string as an input
        const result = capitalize(allUPPERCASE);
        //then return a string with only the first letter capitalized
        expect(result).toEqual('Uppercase');
    });
    it('should take a string of both lower and upper cases and capitalize its first letter', () => {
        //given a string
        const boTh: string = 'BoTh';
        //when calling capitalize function that takes this string as an input
        const result = capitalize(boTh);
        //then return a string with only the first letter capitalized
        expect(result).toEqual('Both');
    });
});