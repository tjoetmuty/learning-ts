//typescript's type system
//1. unknown type and any type differences
const multyplyTwo = (number: unknown) => {
  if (typeof number === "number") {
    return number * 2;
  }
  return "berikan valid number";
};

console.log(multyplyTwo(2));
console.log(multyplyTwo("string"));

//2. type alias
// we can make our own type with custom (can be written with Pascal case or camel Case)
type CustomString = string;
//example:
const nama: CustomString = "muty";

type CustomNumber = number;
//example:
const myAge: CustomNumber = 20