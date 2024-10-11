"use strict";
//typescript's type system
//1. unknown type and any type differences
const multyplyTwo = (number) => {
    if (typeof number === "number") {
        return number * 2;
    }
    return "berikan valid number";
};
//example:
let nama = "muty"; // annotation (Whenever a type can be annotated easily, go ahead and annotate it.)
//example:
let myAge = 20;
//inference
const tahun = (a, b) => {
    return a + b;
};
const totalAges = tahun(20, 22);
// console.log(totalAges)
//3. union type (combining two or more types together)
