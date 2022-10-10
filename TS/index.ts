// Typescript basic part 1

// Type in Typescript

// let myName: string = "Stranger";

// let myAge: number = 21;

// let isStudent: boolean = true;

// console.log("myName: ", myName);

// console.log("myAge: ", myAge);

// console.log("isStudent: ", isStudent);

// Function in Typescript

// const square = (side: number) => side * side;

// console.log("square: ", square(2));

// let greet: Function;

// greet = () => {
//   console.log("Hello Typescript");
// };

// greet();

// const addNumber = (a: number, b: number, c: number) => a + b + c;

// console.log(addNumber(1, 2, 3));

// const addNumbers = (a: number, b: number, c?: number | string) => {
//   console.log(a + b);
//   console.log(c);
// };

// addNumbers(3, 4, "stranger");

// const addDefault = (a: number, b: number, c: number | string = 10) => {
//   console.log("sum = ", a + b);
//   console.log("c = ", c);
// };

// addDefault(5, 5);

// const minus = (a: number, b: number): number => a -b ;

// console.log("minus ", minus(5,3));

// Array And Object In Typescript

// Array

// let arrNames: Array<string> = ["Doctor", "Stranger", "Marvel"];
// arrNames.push("Spider Man");
// console.log(arrNames);

// let arrNumbers: Array<number> = [1, 2, 3, 4, 5, 0.7];
// arrNumbers.push(10);
// arrNumbers[7] = 20;
// console.log(arrNumbers);

// let mixed = [1, "string", false, [1, 2, 3]];
// let mixed: Array <string | number | boolean> = ["stranger", 1, true];
// mixed.push("stranger");
// console.log(mixed);

// Object

// let person = {
//   name: "Stranger",
//   age: 21,
//   isStudent: true,
// };

// let person1 = { ...person, name: "Doctor", age: 19 };
// console.log("person", person);
// console.log("person1", person1);

// let person2 = {
//   ...person,
//   name: "Tony Stark",
//   age: 40,
//   isStudent: false,
//   sex: "male",
// };

// console.log(person2);

// Any Type in Typescript

// let myAge: any;
// myAge = 19;
// myAge = "Nine Teen";

// console.log(myAge);

// Type Alias In Typescript
type StringOrNumber  = string | number;
type Student = {
  name: string
  id: StringOrNumber
}

const StudentDetail = (id: StringOrNumber, studentName: string):void => {
  console.log(`Student ${studentName} has id: ${id}`);
  
}

StudentDetail(1, "Stranger");

StudentDetail("ten", "Stranger");


const greet = (user: Student) => {
  console.log(`${user.name} with id ${user.id} says hello`);
}

greet({
  name: "Doctor",
  id: "Stranger"
})