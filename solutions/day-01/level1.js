const emptyArr = [];
const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(numbers.length);

let firstItem = numbers[0];
let middleItem = numbers[Math.floor(numbers.length / 2)];
let lastItem = numbers[numbers.length - 1];

console.log(firstItem, middleItem, lastItem);

let mixedDataTypes = [
  "London",
  23,
  { name: "Tokio" },
  true,
  "apple pie",
  false,
];

console.log("Length is: ", mixedDataTypes.length);

let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(itCompanies);
console.log("Number of companies: ", itCompanies.length);

let firstCompany = itCompanies[0];
let middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
let lastCompany = itCompanies[itCompanies.length - 1];
console.log(
  "First company: ",
  firstCompany,
  "Middle company: ",
  middleCompany,
  "Last company: ",
  lastCompany
);

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

let upperItCompanies = itCompanies.map((e) => e.toUpperCase());
console.log(upperItCompanies);

console.log(`${itCompanies} are big IT companies`);

/*if (itCompanies.includes("Facebook")) {
  console.log("Company exists");
} else {
  console.log("Company not found");
}*/
// ili
let index = itCompanies.indexOf("Facebook");
if (index != -1) {
  console.log(itCompanies[index]);
} else {
  console.log("Company not found");
}

// fali 14.
/*let words = itCompanies.toString();
console.log(words);*/

let sortCompanies = itCompanies;
console.log(itCompanies.sort());

let reverseCompanies = itCompanies;
console.log(reverseCompanies.reverse());

console.log(itCompanies.slice(3));
console.log(itCompanies.slice(0, -3));

// 19.
let newItCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(newItCompanies);
let middleSlice = newItCompanies.slice(
  Math.floor(newItCompanies.length / 2),
  Math.floor(newItCompanies.length / 2) + 1
);
if (newItCompanies.length % 2 != 0) {
  middleSlice;
} else {
  middleSlice = newItCompanies.slice(
    Math.floor(newItCompanies.length / 2) - 1,
    Math.floor(newItCompanies.length / 2) + 1
  );
}
console.log(middleSlice);

// 20.
let firstOut = newItCompanies;
firstOut.shift();
console.log(firstOut);

// 21.
// same as 19.

// 22.
let lastOut = newItCompanies;
lastOut.pop();
console.log(lastOut);

// 23.
/*newItCompanies.length = 0;
console.log(newItCompanies);*/

// or

while (newItCompanies.length) {
  newItCompanies.pop();
}
console.log(newItCompanies);
