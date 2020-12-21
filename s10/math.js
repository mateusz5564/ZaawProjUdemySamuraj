const add = require("./components/add");
// const multiplyModule = require("./components/multiply");    v1
const { multiply, description } = require("./components/multiply");

console.log(add(2, 3, 4));
// console.log(multiplyModule.multiply(3,4,2));    v1
console.log(multiply(3, 4, 2));
