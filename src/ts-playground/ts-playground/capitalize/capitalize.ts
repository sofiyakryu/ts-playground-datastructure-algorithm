export const capitalize = (myString: string) :string => {
    let input = myString.slice(1, myString.length);
    let lowerCase = input.toLowerCase();
    let firstChar = myString.charAt(0).toUpperCase();
    
    return firstChar + lowerCase;
}