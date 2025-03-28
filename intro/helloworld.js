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
