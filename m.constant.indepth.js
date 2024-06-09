// constant
// ? in js, constant means which cannot be re-assigned

// const x = 7;
// x = 9;

// ? mutation => process of having change
// ? mutate => change
// ? mutable => changeable
// ? immutable => unchangeable

// ? primary data type(string, number, boolean, undefined, null) =>  cannot be reassigned, thus immutable
// ? non-primary data type(object) => cannot be reassigned, but mutable

// ? immutable
// const isDeveloped = false;
// isDeveloped = true;

// const phoneDetails = {
//   brand: "Samsung",
// };

// phoneDetails.brand = "Apple";

// console.log(phoneDetails);

// phoneDetails = {
//   brand: "Apple",
// }; //constant cannot be reassigned

// const obj1 = Object.freeze({
//   name: "Rohan",
// });

// obj1.name = "Roshna";
// obj1.age = 25;
// console.log(obj1);

// obj1 = {
//   name: "Z",
// };

const obj1 = {
  name: "A",
  age: 25,
};
const obj2 = {
  name: "A",
};

//  TODO: after array
const obj1Keys = Object.keys(obj1);

const obj2Keys = Object.keys(obj2);

// console.log(obj1Keys, obj2Keys);

// console.log(Object.values(obj1));
console.log(obj1Keys);
