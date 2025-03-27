console.log("Welcome to 30 days of javaScript");

let firstName = "Suyog";
firstName = "Krishna";

console.log(firstName);

const PI = 3.14; // Not allowed to reassign PI to a new value
// PI = 3.
console.log(PI);

// .... Using Array Constructor ...

// syntax
const arr = Array();
// or
// let arr = new Array()
console.log(arr); // []

// ... USing Square Brackets([])...

// syntax
// this is the most recommneded way to create an empty list

const arr1 = [];
console.log(arr);

// ... Lets create an array with values ...

const numbers = [0, 2.14, 3.14, 34, 122]; // arrays of numbers
const fruits = ["banana", "orange", "mango", "Apple"]; // arrays of fruits

console.log("Numbers:", numbers);
console.log("Numbers of numbers:", numbers.length);

console.log("Fruits:", fruits);
console.log("Numbers of Fruits:", fruits.length);

// ... Array can have items of different data types ...

const arr2 = [
  "Suyog",
  9,
  true,
  { Country: "Findland", City: "Helsinki" },
  { Skills: ["HTML", "CSS", "JS", "React", "Python"] },
]; // arr containing different data types
console.log(arr2);
