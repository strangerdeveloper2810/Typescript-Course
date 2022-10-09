// Typescript basic part 1

// Type in Typescript

let myName: string = "Stranger";

let myAge: number = 21;

let isStudent: boolean = true;

console.log("myName: ", myName);

console.log("myAge: ", myAge);

console.log("isStudent: ", isStudent);

// Function in Typescript

const square = (side: number) => side * side;

console.log("square: ", square(2));

let greet: Function;

greet = () => {
  console.log("Hello Typescript");
};

greet();

const addNumber = (a: number, b: number, c: number) => a + b + c;

console.log(addNumber(1, 2, 3));

const addNumbers = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c);
};

addNumbers(3, 4, "stranger");

const addDefault = (a: number, b: number, c: number | string = 10) => {
  console.log("sum = ", a + b);
  console.log("c = ", c);
};

addDefault(5, 5);

const minus = (a: number, b: number): number => a -b ;

console.log("minus ", minus(5,3));

// Array And Object In Typescript