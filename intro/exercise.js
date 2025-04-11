// 1. Declare an empty array;
const arr = [];
console.log(arr);

// 2. Declare an array with more than 5 number of elements
const arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr1);

// 3. Find the length of your array
console.log("Length of array:", arr1.length);

// 4. Get the first item, the middle item and the last item of the array
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
console.log(webTechs[3]);
console.log(webTechs[6]);
console.log(webTechs[0]);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
  "variables",
  "data",
  "modules",
  "indexOf",
  "array",
  "lastIndexOf",
  "Splice",
  "Slice",
];
console.log(mixedDataTypes.length);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
console.log(itCompanies.length);

//7. Print the first company, middle and last company
const first = itCompanies[0];
const middle = itCompanies[Math.floor(itCompanies.length / 2)];
const last = itCompanies[itCompanies.length - 1];

console.log("first:", first);
console.log("middle:", middle);
console.log("last:", last);

// 8.Change each company name to uppercase one by one and print them out

// using loops
const companies = ["google", "facebook", "microsoft", "apple", "amazon"];

for (let i = 0; i < companies.length; i++) {
  console.log(companies[i].toUpperCase());
}

// using foreach
const companies1 = ["google", "facebook", "microsoft", "apple", "amazon"];

companies.forEach((company) => {
  console.log(company.toUpperCase());
});
