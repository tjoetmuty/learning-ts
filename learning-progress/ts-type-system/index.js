"use strict";
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
