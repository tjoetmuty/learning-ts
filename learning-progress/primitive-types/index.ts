//primitive types (data types)

//1. string
const halo: string = "muty";
const age = 3;
const ageAsString: string = age.toString();

// console.log(halo)
// console.log(age)
// console.log(ageAsString)

//2. number
const umur: number = 20;
const stringToNumber: number = parseInt("2004");
// console.log(stringToNumber)

//3. boolean
const isGirl: boolean = true;
const minimumAge = age <= 3 ? true : false;
// console.log(minimumAge)

//4. null and undefined types
let user: undefined; //undefined itu jika tidak ada value yang di deklarasikan
console.log(user);

let userRole: null; //null tidak sama dengan undefined
userRole = null;
console.log(userRole);

console.log(user === userRole); // they are different. so the output is false

//PRACTICE
//there are a lots variables that have been declared dan the each values have assigned
//what i have to do is i have to strictly type each of these variables
let message: string = "Hello, typescript!";
let newAge: number = 42;
let isStudent: boolean = true;
let fetched: null = null;
let newUser: undefined = undefined;
let largeNumber: bigint = 9007199254n;
let unique: symbol = Symbol("helloUnique");

//typescript's type system
//1. unknown type
const multyplyTwo = (number: unknown) => {
  if (typeof number === "number"){
    return number * 2
  }
  return "berikan valid number"
}

console.log(multyplyTwo(2))
console.log(multyplyTwo("string"))