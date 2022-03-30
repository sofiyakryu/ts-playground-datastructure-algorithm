export const demoBasicTypes = (): void => {
  console.log('Demo about basic ts types');

  const aNumber: number = 4;
  const aFloat: number = 0.4;
  const aBigNum: number = 999999999999999999999999999999999;

  const myName: string = 'Ciao';

  const isReal: boolean = false;

  const sofiya: person = {
    name: 'Sofiya',
    age: 25,
    address: { streetName: 'Kelso place', streetNumber: 46 }
  };
};

type person = {
  name: string;
  age: number;
  address: address;
  postCode ?: string;
};

type address = {
  streetName: string;
  streetNumber: number;
};
