const prompt = require('prompt-sync')();

// Even Odd Program
let num= prompt("Enter a number:");
let result = (num%2==0) ? " is even" : " is odd";
console.log(num + result);

// Positive Negative Zero Program
let num1 = prompt("Enter a number:");
let result2= (num1==0) ? " is zero" : num1>0 ? " is positive" : " is negative";
console.log(num1 + result2);

// Vote Program
let age = prompt("Enter your age:");
let result1= (age>=18) ? "You can vote" : "You cannot vote";
console.log(result1);

