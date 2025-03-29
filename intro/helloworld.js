console.log("Hello,World!");

//...Accessing array items using index......

const fruits = ["banana", "orange", "mango", "lemon"];
let firstFruits = fruits[0]; // we are accessing the first item using its index.

console.log(firstFruits);

secondFruit = fruits[1];
console.log(secondFruit);

let lastFruit = fruits[3];
console.log(lastFruit);

// Last index can be calculated as follows

let lastIndex = fruits.length - 1;
lastFruit = fruits[lastIndex];

console.log(lastFruit);

// next example

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]; // List of web technologies

console.log(webTechs);
console.log(webTechs.length);
console.log(webTechs[2]);
console.log(webTechs[5]);

let lastIndex1 = webTechs.length - 2;
console.log(webTechs[lastIndex1]);

// ... Modifying array element ....

const numbers = [1, 2, 3, 4, 5];
numbers[0] = 10; // changing 1 at index 0 to 10.
numbers[1] = 20;

console.log(numbers);

const countries = [
  "Albania",
  "Brazil",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Indonesia",
  "Japan",
  "Kenya",
  "Nepal",
];

countries[5] = "France"; // replacing finland by france
let lastIndex2 = countries.length - 2;
countries[lastIndex2] = "korea"; // replacing kenya by korea

console.log(countries);

//... Methods to manipulate array

const arr = Array(); // creates an empty array
console.log(arr);

const eightXValues = Array(8); // it creates eight element values filled with 'X'
console.log(eightXValues);

const eight0calues = Array(8).fill(1); //it creates eight element values filled with '1'
console.log(eight0calues);

const four4Values = Array(4).fill(4);
console.log(four4Values);

//... Concatenating array using arrays...

const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);

console.log(thirdList);

const fruits1 = ["banana", "orange", "mango", "lemon"];
const vegatables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"];
const fruitsAndVegatables = fruits1.concat(vegatables); //concatenate the two aarays

console.log(fruitsAndVegatables);

// ... Getting index of an element in an array

const numbers2 = [1, 2, 3, 4, 5];

console.log(numbers2.indexOf(5)); // -> 4
console.log(numbers2.indexOf(2)); // 1
console.log(numbers2.indexOf(0)); // -1

//... check an element if it extist in the array...

const fruits2 = ["banana", "orange", "mango", "apple"];
let index = fruits.indexOf("banana");

if (index != -1) {
  console.log("This fruit does exist in the array");
} else {
  console.log("This fruit does not exist in the array");
}

// we can use also ternary here
index != -1
  ? console.log("This fruit does exist in the array")
  : console.log("This fruit does not exist in the array");

//let us check if a avocado exist in the array
let indexOfAvocado = fruits2.indexOf("avocado");
if (indexOfAvocado != -1) {
  console.log("This fruit does exist in the array");
} else {
  console.log("This fruit does not exist in the array");
}

// ... includes: to check if an item exist in an array.
// If it exist it returns the true else it returns false.....

const number = [1, 2, 3, 4, 5];

console.log(number.includes(5));
console.log(number.includes(0));
console.log(number.includes(1));
console.log(number.includes(6));

const webTex = ["HTML", "CSS", "JavaScript", "React", "node"];

console.log(webTex.includes("node"));
console.log(webTex.includes("C"));
