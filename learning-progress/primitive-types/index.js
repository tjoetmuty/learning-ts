"use strict";
//data type
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
