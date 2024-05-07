//! problem 01
/* Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them)
 */
let num1 = 30;
let num2 = 20;

if (num1 > num2) {
  console.log("maximam number is : " + num1);
} else {
  console.log("maximam number is : " + num2);
}

//! problem 02
/* Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take a single variable and check using if else condition)
 */
let whether = 33;

if (whether > 0) {
  console.log(whether + " : is positive.");
} else if (whether < 0) {
  console.log(whether + " : is negative.");
} else {
  console.log("The number is zero.");
}

//! problem 03
/* Solve the problem with Javascript  to check whether a number is divisible by 10 or not. (take single variable and check using if esle condition)
 */
let number = 20;

if (number % 10 === 0) {
  console.log(number + " is divisible by 10.");
} else {
  console.log(number + " is not divisible by 10.");
}

//! problem 04
/* Solve the problem with Javascript  to check whether a number is even or odd.
 */
let numbers = 5;

if (numbers % 2 === 0) {
  console.log(numbers + " is even number.");
} else {
  console.log(numbers + " is odd odd number.");
}

//! problem 05
/* Solve the problem with Javascript  to check whether a character is in the alphabet or not.
 */
let chraractor = "E";

if (
  (chraractor >= "a" && chraractor <= "z") ||
  (chraractor >= "A" && chraractor <= "Z")
) {
  console.log(chraractor + " is in the alphabet.");
} else {
  console.log(chraractor + " is not in the alphabet.");
}

//! problem 06
/* Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , anyother value is normal)
 */
let tem = 27;

if (tem >= 30) {
  console.log("The temperature is hot.");
} else if (tem <= 25) {
  console.log("The temperature is cold.");
} else {
  console.log("The temperature is normal.");
}

//! problem 07
/* Solve the problem with Javascript  to find a maximum between three numbers. (Hint: take 3 variables and find the maximum number between them use logical and operator for that)
 */
let numOne = 30;
let numTwo = 25;
let numThree = 15;
let maxNumber;

if (numOne >= numTwo && numOne >= numThree) {
  maxNumber = numOne;
} else if (numTwo >= numOne && numTwo >= numThree) {
  maxNumber = numTwo;
} else {
  maxNumber = numThree;
}
console.log(maxNumber + " is maximum number.");

//! problem 08
/* Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number”.
 */
let x = 4;

let result = x % 2 === 0 ? "Even Number" : "Odd Number";
console.log(result);

//! problem 09
/* Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result.
 */
let num01 = 33;
let num02 = 34;

if (num01 > 30 && num02 > 30) {
  console.log("Both num01 and num02 are greater than 30.");
} else {
  console.log("At least one of num01 and num02 is not greater than 30.");
}

//! problem 10
/* Write a JavaScript program that uses if-else statements combined with logical operators. The program should check if a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager”. (Hint: Combining If-Else and Logical Operators)
 */
let age = 22;

if (age >= 13 && age <= 19) {
  console.log("Teenager");
} else {
  console.log("Not a teenager");
}
