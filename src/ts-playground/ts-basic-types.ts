export const demoBasicTypes = () : void => {
    console.log("Demo");

    const sofiya: person = {
        name: "Sofiya",
        age: "25",
        address: {
            streetName: 'Kelso place',
            streetNumber: 46,
        },
    }
} 

type person = {
    name: string;
    age: number;
    address: address;
    postCode ?: string;
}

type address = {
    streetName: string;
    streetNumber: number;
}

const biTypes: string | boolean = "Hello";