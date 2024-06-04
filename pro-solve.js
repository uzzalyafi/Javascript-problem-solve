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

//! problem 11
/*  Create a program that uses the logical OR operator to check if either one of two strings str1 or str2 is equal to "JavaScript". Output a boolean result.
 */
function program(str1, str2) {
  if (str1 === "JavaScript" || str2 === "JavaScript") {
    return true;
  } else {
    return true;
  }
}
let str1 = "javaScript";
let str2 = "group";
console.log(program(str1, str2));

//! problem 12
/* Given 3 subjects Math, English and Physics find the total marks and average of 3 subjects.
 */
function greadeCalculate(Math, English, Physics) {
  let totalMarks = Math + English + Physics;
  let averageMark = totalMarks / 3;

  console.log("Total Marks:", totalMarks);
  console.log("Average Mark:", averageMark.toFixed(2));

  let grade;
  if (averageMark >= 90) {
    return (grade = "Grade A");
  } else if (averageMark >= 80) {
    return (grade = "Grade B");
  } else if (averageMark >= 70) {
    return (grade = "Grade C");
  } else if (averageMark >= 60) {
    return (grade = "Grade D");
  } else if (averageMark >= 40) {
    return (grade = "Grade E");
  } else {
    return (grade = "Grade F");
  }
}
let Math = 90;
let English = 88;
let Physics = 90;

console.log(greadeCalculate(Math, English, Physics));

//! problem 13
/*
  Find the random number between 1 to 10
*/


// function randomNumber() {
//   return Math.floor(Math.random() * 10) + 1;
// }

// console.log(randomNumber());




//! problem 14 
// Create 3 meaningful arrays and  3 objects

let fruits = ["apple", "banana", "orange", "kiwi", "grapes"];
let country = ["New York", "Tokyo", "London", "Paris", "Sydney"];
let numberArray = [10, 25, 38, 42, 57];

let person = {
  name: "Uzzzal",
  age: 30,
  city: "Gazipur",
};
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "Silver",
};
let smartphone = {
  brand: "Samsung",
  Model: "Galaxy S21 Ultra",
  ReleaseDate: "29 Jan 2021",
  color: "Phantom Black",
  specifications: {
    OperatingSystem: "Android",
    Chipset: "Exynos 2100",
    CPUCores: "Octa-cores",
    GPU: "Mali-G78 MP14",
  },
};

console.log(smartphone.specifications.OperatingSystem);
//! problem 15
//Create a while loop which prints values from 10 to 50 

let value = 10;
while (value <= 50) {
  console.log(value);
  value++;
}
//! problem 16
// Create a for loop which prints values from 20 to 60.

for (let I = 20; I <= 60; I++) {
  const element = I;
  console.log(element);
}
//! problem 17
// Create a function of adding two numbers.

function addingNumber(num1, num2) {
  return `Result: ${num1 + num2}`;
}
console.log(addingNumber(12, 45));
//! problem 18
/* 
Create a function which returns a for loop which takes two parameter one is initial value & final value to return the list of number from initial to final value.
*/

function returnsLoop(initialVaue, finalValue) {
  let result = [];
  for (let i = initialVaue; i <= finalValue; i++) {
    result.push(i);
  }
  return result;
}

console.log(returnsLoop(10, 20));
//! problem 19
//Create a function which return whether the year is leap year or not

function leapYearCheak(Years) {
  if ((Years % 4 === 0 && Years % 100 !== 0) || Years % 400 === 0) {
    return `${Years} is leap years`;
  } else {
    return `${Years} is not leap years`;
  }
}
console.log(leapYearCheak(2024));
//! problem 20
/*
Create a function which return whether the temperature is hot or cold (30 <=  is hot, 25 >= is cold , anyother value is normal)
*/

function whethers(value) {
  if (value >= 30) {
    return `Whether is hot`;
  } else if (value <= 25) {
    return `Whether is cold`;
  } else {
    return `Whether is Normal`;
  }
}

console.log(whethers(32));
//! problem 21
//Create a function which returns whether the number is odd or even.

function oddEvenCheak(num) {
  return num % 2 === 0 ? `${num} is even number` : `${num} is odd number`;
}
console.log(oddEvenCheak(6));

//! problem 22
// Splice and an given array - remove two items and adding two new elements.

let array = [1, 2, 3, 4, 5, 6];
array.splice(2, 2, 'a', 'b'); 

console.log(array); 

//! problem 23
//Reverse and sort an array where arr = [2,45,4,55,12,42,34,78].

function reverseSortArray() {
  let arr = [2, 45, 4, 55, 12, 42, 34, 78];
  let reverseArr = arr.reverse();
  let sortArr = reverseArr.sort((a, b) => a - b);
  return sortArr;
}
console.log(reverseSortArray());

//! problem 24
/* Create a object with car and add two function in there (called methods as well) and print out the the result calling two functions using this keyword as well
*/

const theCar = {
  make : 'TOyota',
  model : 'Corolla',
  year : 2010,

  displayInfo: function () {
    return `Car : ${this.make} ${this.model}, Year : ${this.year}`
  },

  ageCalculate: function(){
    const currentYear = new Date().getFullYear();
    return `The car is ${currentYear - this.year} Years old`
  },
}

console.log(theCar.displayInfo());
console.log(theCar.ageCalculate());

//! problem 25
// Reverse an given string. Where, - let text = “I love coding” - after reverse a string output will be - ‘gnidoc evol i’

let string = 'I love coding';
let stringArr = string.split('');
let reverseString = stringArr.reverse('').join('');
console.log(reverseString);
//! problem 26
/* Create an array with list of items. Iterate the array to view the list of the items in the console using for loop. 
*/

let items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}

