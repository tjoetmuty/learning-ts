//typescript's type system
//1. unknown type and any type differences
const multyplyTwo = (number: unknown) => {
  if (typeof number === "number") {
    return number * 2;
  }
  return "berikan valid number";
};

// console.log(multyplyTwo(2));
// console.log(multyplyTwo("string"));

//2. type alias & declaration, annotation, inference
// we can make our own type with custom (can be written with Pascal case or camel Case)
type CustomString = string; //declaration (Whenever it's a complex type, declare it.)
//example:
let nama: CustomString = "muty"; // annotation (Whenever a type can be annotated easily, go ahead and annotate it.)

type CustomNumber = number;
//example:
let myAge: CustomNumber = 20

//inference
const tahun = (a: number, b:CustomNumber ) => {
  return a + b
}

const totalAges = tahun(20, 22)
// console.log(totalAges)

//3. union type (combining two or more types together)
