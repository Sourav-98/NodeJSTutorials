/*

Here, we dive deeper into functions, and explore the following

    1. Regular functions
    2. Arrow functions

*/

// 1. Different types of 'regular' function definitions

function addFunc(number1, number2){
    let sum = number1 + number2;
    return sum;
}

let addFunc1 = function(number1, number2){
    let sum = number1 + number2;
    return sum;
}

console.log(addFunc(2, 3));
console.log(addFunc1(2, 3));


// 2. Arrow functions and their different types of definitions

// A regular function
function multiplyFunc(number1, number2){
    return number1 * number2;
}

// Arrow(a.k.a Anonymous) function
let multiplyFunc1 = (number1, number2)=>{
    return number1 * number2;
}

// As only a single return statement is there, the 'return' statement can be omitted and the above function can be re-written as
let multiplyFunc2 = (number1, number2) => number1 * number2;

console.log(multiplyFunc(3, 4))
console.log(multiplyFunc1(3, 4))
console.log(multiplyFunc2(3, 4))
