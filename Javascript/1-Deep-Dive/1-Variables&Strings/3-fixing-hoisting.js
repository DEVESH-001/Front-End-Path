//why use let & const over var: fixing hoisting issue

//problem with var due to hoisting
// "use strict";
// console.log(age);
// var age = 3;

// console.log(age);

// let & const do not have hoisting issue
//console.log(newAge);
//temporal dead zone: area b/w start of scope & variable declaration
const newAge = 5;
console.log(newAge);

let age;
age = 24;1
age = 33
console.log(age);