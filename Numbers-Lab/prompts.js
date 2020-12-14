//Prompt a user twice to input a number. Store their response in variables.
let num1 = prompt("Enter a number");
let num2 = prompt("Enter another number");

//Declare another variable to store the total of each statement
const newNum1 = parseInt(num1);
const newNum2 = parseInt(num2);
let sum = newNum1 + newNum2;

//Code a series of JS statements that use the user input to preform math operations.
console.log(newNum1 + newNum2);
console.log(newNum1 - newNum2);
console.log(newNum1 * newNum2);
console.log(newNum1 / newNum2);
console.log(newNum1 ** newNum2);
console.log(newNum1 % newNum2);

//Code a statement that would return a random number between 1 and 35.
const randomNumber = Math.floor( Math.random() * 35 ) + 1
console.log(`The random number is ${random}`);

//Code a statement to return a floating point number rounded up to the nearest integer.
console.log(Math.ceil(5/2));

//Code a statement that returns a floating point number rounded down to the nearest integer.
console.log(Math.floor(5/2));

//Prompt a user twice to input a number. Store their response in variables.Using Math.pow return the value of the one variable to the power of the other. Display the result.
let num3 = prompt("Enter a number");
let num4 = prompt("Enter one more number");
const newNum3 = parseInt(num3);
const newNum4 = parseInt(num4);
const answer = Math.pow(newNum3, newNum4);
alert(`The answer is ${answer}. ${newNum3} to the power of ${newNum4}`);
