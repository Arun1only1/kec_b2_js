// conditionals

// ? sequential flow
// console.log("Hi");

// console.log(2 + 3);

// console.log("Hello");

// ? if
// ? if.. else
// ? if ..else if ... else
// ? switch
// ? ternary

// ? if
// ?syntax
// if(condition){
// some code here
// }

// console.log("Hi");

// if (2 === 3) {
//   console.log(2 + 3);
// }

// console.log("Hello");

//? if...else
// if (condition) {
// some code here
// } else {
// some code here
// }

// if ("Nepal" !== "Nepal") {
//   console.log("Hi");
// } else {
//   console.log("Hello");
// }

// ? find if a number is odd or even

// let num = 56;

// let remainder = num % 2;

// if (remainder === 1) {
//   console.log(`${num} is odd.`);
// } else {
//   console.log(`${num} is even.`);
// }

// ?if...else if ...else
// ? syntax
// if (condition1) {
// some code here
// } else if (condition2) {
// some code here
// } else {
// some code here
// }

// ? find polarity of a number
// let a = 0;

// if (a < 0) {
//   console.log("-ve");
// } else if (a > 0) {
//   console.log("+ve");
// } else {
//   console.log("zero/neutral");
// }

// ? suppose any three different positive numbers
// ? and find greatest number among them

// let a = 555;
// let b = 61;
// let c = 7;

// if (a > b && a > c) {
//   console.log("a is largest");
// } else if (b > c) {
//   console.log("b is largest");
// } else {
//   console.log("c is largest");
// }

// ? switch => best for multiple choice question

// ? 1. Green
// ? 2. Yellow
// ? 3. Blue

//? syntax
// switch (variable) {
//   case value1:
// some code here
// break;

//   case value2:
// some code here
// break;

//   case valueN:
// some code here
// break;

//   default:
// some code here
// }

// let dayNumber = 1;

// switch (dayNumber) {
//   case 1:
//     console.log("Sunday");
//     break;

//   case 2:
//     console.log("Monday");
//     break;

//   case 3:
//     console.log("Tuesday");
//     break;

//   case 4:
//     console.log("Wednesday");
//     break;

//   case 5:
//     console.log("Thursday");
//     break;

//   case 6:
//     console.log("Friday");
//     break;

//   case 7:
//     console.log("Saturday");
//     break;

//   default:
//     console.log("Invalid day number");
// }

// ? ternary

// let x = 50;

// let remainder = x % 2;

// if (remainder === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

//? condition ? exprIfTrue : exprIfFalse

// remainder === 0 ? console.log("even") : console.log("odd");

// console.log(remainder === 0 ? "Even" : "Odd");

// ?  conditional(ternary) operator chaining example
let a = -55;

// if (a < 0) {
//   console.log("-ve");
// } else if (a > 0) {
//   console.log("+ve");
// } else {
//   console.log("zero/neutral");
// }

//  condition1 ? value1
//   : condition2 ? value2
//   : condition3 ? value3
//   : value4;

a < 0 ? console.log("-ve") : a > 0 ? console.log("+ve") : console.log("zero");
