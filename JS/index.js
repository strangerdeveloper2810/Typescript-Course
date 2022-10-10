"use strict";
// Typescript basic part 1
const StudentDetail = (id, studentName) => {
    console.log(`Student ${studentName} has id: ${id}`);
};
StudentDetail(1, "Stranger");
StudentDetail("ten", "Stranger");
const greet = (user) => {
    console.log(`${user.name} with id ${user.id} says hello`);
};
greet({
    name: "Doctor",
    id: "Stranger"
});
