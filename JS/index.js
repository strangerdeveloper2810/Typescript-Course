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
// Array
let arrNames = ["Doctor", "Stranger", "Marvel"];
arrNames.push("Spider Man");
console.log(arrNames);
let arrNumbers = [1, 2, 3, 4, 5, 0.7];
arrNumbers.push(10);
arrNumbers[7] = 20;
console.log(arrNumbers);
// let mixed = [1, "string", false, [1, 2, 3]];
let mixed = ["stranger", 1, true];
mixed.push("stranger");
console.log(mixed);
// Object
let person = {
    name: "Stranger",
    age: 21,
    isStudent: true,
};
let person1 = Object.assign(Object.assign({}, person), { name: "Doctor", age: 19 });
console.log("person", person);
console.log("person1", person1);
let person2 = Object.assign(Object.assign({}, person), { name: "Tony Stark", age: 40, isStudent: false, sex: "male" });
console.log(person2);
// Any Type in Typescript
let myAges;
myAges = 19;
myAges = "Nine Teen";
console.log(myAge);
const StudentDetail = (id, studentName) => {
    console.log(`Student ${studentName} has id: ${id}`);
};
StudentDetail(1, "Stranger");
StudentDetail("ten", "Stranger");
const greet1 = (user) => {
    console.log(`${user.name} with id ${user.id} says hello`);
};
greet1({
    name: "Doctor",
    id: "Stranger"
});
// Function Signature
let sayHello;
sayHello = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
sayHello("Stranger", "Con Cak");
let calculate;
calculate = (numOne, numTwo, action) => {
    const result = action === "ADD" ? numOne + numTwo : numOne - numTwo;
    console.log(result);
};
calculate(1, 2, "Minus");
let printStudent;
// printStudent = (myStudent: Students) => {
//   console.log(`${myStudent.name} is ${myStudent.age} years old`);
// }
// destructuring
printStudent = ({ name, age }) => {
    console.log(`${name} is ${age} years old`);
};
printStudent({ name: "Stranger", age: 20 });
