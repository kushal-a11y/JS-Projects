//Merging tow arrays

const arr1 = [4,7,2,8,9,80]
const arr2 = [7,9,2,1,6]

// arr1.push(arr2)

console.log(arr1);

const merged = arr1.concat(arr2)

console.log(merged);
//Spread
const allNew = [...arr1, ...arr2]

console.log(allNew);

const anotherarr = [1,5,2,[7,8,8],8,[7,0,2,3]]

console.log(anotherarr);

const falttened = anotherarr.flat(Infinity)

console.log(falttened);

console.log(Array.isArray("Hitesh"));

console.log(Array.from("Hitesh"));

console.log(Array.from({name: "Hitesh"}));//Interesting

let score1 = 100

let score2 = 200

let score3 = 300

console.log(Array.of(score1,score2,score3));

Exercise 1: Merging, Flattening & Checking Arrays
Problem Statement:
You are given two arrays:

Merge both arrays using the .concat() method and store the result in a new variable.
Merge both arrays again using the spread operator (...).

const numbers1 = [5, 10, 15, 20];
const numbers2 = [25, 30, 35, 40];

const arr3 = numbers1.concat(numbers2)
console.log(arr3);

const arr4 = [...numbers1, ...numbers2]

// console.log(arr4);
// Flatten the array completely using .flat().
const nestedArr = [1, [2, 3, [4, 5, [6, 7]]]];

console.log(nestedArr.flat(Infinity));


// Check if a given variable is an array using Array.isArray():
const testVar = "Hello JavaScript";
console.log(Array.isArray(testVar));

// Convert a string into an array using Array.from(), for example:

let myString = "Coding";
console.log(Array.from(myString));

// Convert the following object into an array using Array.from():

const obj = { name: "Alice" };

console.log(Array.from(obj));


