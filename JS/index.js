"use strict";
// Typescript basic part 1
// Type in Typescript
let myName = "Stranger";
let myAge = 21;
let isStudent = true;
console.log("myName: ", myName);
console.log("myAge: ", myAge);
console.log("isStudent: ", isStudent);
// Function in Typescript
const square = (side) => side * side;
console.log("square: ", square(2));
let greet;
greet = () => {
    console.log("Hello Typescript");
};
greet();
const addNumber = (a, b, c) => a + b + c;
console.log(addNumber(1, 2, 3));
const addNumbers = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
addNumbers(3, 4, "stranger");
const addDefault = (a, b, c = 10) => {
    console.log("sum = ", a + b);
    console.log("c = ", c);
};
addDefault(5, 5);
const minus = (a, b) => a - b;
console.log("minus ", minus(5, 3));
// Array And Object In Typescript
