let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let punctuationsRemove = text.replace(/[^\p{L}\p{N}\s]/gu, "");
console.log(punctuationsRemove);
let words = punctuationsRemove.split(" ");
console.log(words);
console.log(words.length);

// 3.
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

if (shoppingCart.indexOf("Meat") != -1) {
  console.log(shoppingCart);
} else {
  shoppingCart.unshift("Meat");
  console.log(shoppingCart);
}

if (shoppingCart.indexOf("Sugar") != -1) {
  console.log(shoppingCart);
} else {
  shoppingCart.push("Sugar");
  console.log(shoppingCart);
}

let spliced = shoppingCart.splice(4, 1);
console.log(shoppingCart);

let modified = shoppingCart.splice(3, 1, "Green Tea");
console.log(shoppingCart);

// 4.
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

if (countries.indexOf("Ethiopia") != -1) {
  countries.splice(countries.indexOf("Ethiopia"), 1, "ETHIOPIA");
  console.log(countries);
} else {
  countries.push("ETHIOPIA");
  console.log(countries);
}

// or

/*let indexOfCountry = countries.indexOf("Ethiopia");

if (indexOfCountry != -1) {
  countries[indexOfCountry] = "ETHIOPIA";
}
console.log(countries);*/

// 5.
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

if (webTechs.indexOf("Sass") != -1) {
  console.log("Sass is CSS preprocess");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

// 6.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
