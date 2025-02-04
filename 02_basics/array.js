// //Arrays

// const myarr = [3,8,2,23,"hjgvh","hfd"]
// const heroes = ["toad","Alexander","Ceaser"]

// // Not associative
// // myarr.unshift(90)
// // myarr.shift()
// // console.log(myarr);

// // myarr.push(7)
// // myarr.pop()
// // console.log(myarr);

// // console.log(myarr.includes(23));

// // console.log(myarr.indexOf(23));

// // console.log(myarr);

// // const newArr = myarr.join()

// // console.log(typeof newArr);

// const slicedArr = myarr.slice(1,3)

// console.log(`sliced arr: ${slicedArr} original arr ${myarr}`);
// const splicedArr = myarr.splice(1,3)
// console.log(`spliced arr: ${splicedArr} -- original arr ${myarr}`);

// console.log(typeof myarr);

// Assignment 1: Array Modification (push(), pop(), unshift(), shift())
// Question:
// Given the array:

// js
// Copy
// Edit
// let numbers = [5, 10, 15, 20];
// Add 25 at the end of the array.
// Remove the first element of the array.
// Add 2 at the beginning of the array.
// Remove the last element of the array.
// Print the final modified array.

let numbers = [5, 10, 15, 20];
numbers.push(25)
console.log(numbers);
numbers.shift()
console.log(numbers);
numbers.unshift(2)
console.log(numbers);
numbers.pop()
console.log(numbers);

// Assignment 2: Array Searching (includes(), indexOf())
// Question:
// Given the array:

// js
// Copy
// Edit
// let items = ["apple", "banana", "mango", "orange"];
// Check if "mango" exists in the array and print "Yes" if found, otherwise "No".
// Find and print the index of "orange".
// Try to find the index of "grape". What does JavaScript return when the element is not found?
let items = ["apple", "banana", "mango", "orange"];
if(items.includes("mango"))
    console.log("yes");
else
    console.log("no");
console.log(`Index of "orange" is ${items.indexOf("orange")}`);
console.log(`Index of "grape" is ${items.indexOf("grape")}`);

// Assignment 3: Array Slicing (slice())
// Question:
// Given the array:

// js
// Copy
// Edit
// let colors = ["red", "blue", "green", "yellow", "purple"];
// Extract the first three elements using slice() and store them in a new array.
// Extract the last two elements using slice().
// Print the original array and the sliced arrays.

let colors = ["red", "blue", "green", "yellow", "purple"];

console.log(colors.slice(0,3));
console.log(colors.slice(colors.length - 2));


// Assignment 4: Array Splicing (splice())
// Question:
// Given the array:

// js
// Copy
// Edit
// let students = ["John", "Alice", "Bob", "Eve", "Charlie"];
// Remove "Bob" and "Eve" from the array using splice().
// Insert "David" and "Sophia" at the same position where "Bob" was removed.
// Print the modified array.

// SPLICE SYNTAX---array.splice(startIndex, deleteCount(no of leemnts to be deleted), item1, item2, ...);

let students = ["John", "Alice", "Bob", "Eve", "Charlie"];
const i = students.indexOf("Bob")
students.splice(i,2)
console.log(students);

students.splice(i,0,"David","Sophia")

console.log(students);

const x = students.join(" ")
console.log(`after joining ${x} type of ${x} is ${typeof x}`);


