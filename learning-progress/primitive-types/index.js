"use strict";
//primitive types (data types)
//1. string
const halo = "muty";
const age = 3;
const ageAsString = age.toString();
// console.log(halo)
// console.log(age)
// console.log(ageAsString)
//2. number
const umur = 20;
const stringToNumber = parseInt("2004");
// console.log(stringToNumber)
//3. boolean
const isGirl = true;
const minimumAge = age <= 3 ? true : false;
// console.log(minimumAge)
//4. null and undefined types
let user; //undefined itu jika tidak ada value yang di deklarasikan
console.log(user);
let userRole; //null tidak sama dengan undefined
userRole = null;
console.log(userRole);
console.log(user === userRole); // they are different. so the output is false
//PRACTICE
//there are a lots variables that have been declared dan the each values have assigned
//what i have to do is i have to strictly type each of these variables
let message = "Hello, typescript!";
let newAge = 42;
let isStudent = true;
let fetched = null;
let newUser = undefined;
let largeNumber = 9007199254n;
let unique = Symbol("helloUnique");
//typescript's type system
//1. unknown type
const multyplyTwo = (number) => {
    if (typeof number === "number") {
        return number * 2;
    }
    return "berikan valid number";
};
console.log(multyplyTwo(2));
console.log(multyplyTwo("string"));
