// Modules are the blocks of encapsulated code that communicate with 
// an external application on the basis of their related functionality. 
// Modules can be a single file or a collection of multiple files/folders.
// The reason programmers are heavily reliant on modules is because of their reusability as well as 
// the ability to break down a complex piece of code into manageable chunks. 

const math = require("./Operation")
let a = 12;
let b = 2;

console.log(math)
// console.log("Sum of a and b is : ",math.add(a,b));
// console.log("Difference of a and b is : ",math.sub(a,b));
console.log("Division of a and b is : ", math.div(a, b));