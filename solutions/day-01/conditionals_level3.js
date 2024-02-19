/*let userInputMonth = prompt("Enter a month: ");
let month = userInputMonth.toLowerCase();

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let upperLetter = capitalizeFirstLetter(month);

if (
  month === "january" ||
  month === "march" ||
  month === "may" ||
  month === "july" ||
  month === "august" ||
  month === "october" ||
  month === "december"
) {
  console.log(upperLetter, "has 31 days");
} else if (
  month === "april" ||
  month === "june" ||
  month === "september" ||
  month === "november"
) {
  console.log(upperLetter, "has 30 days");
} else if (month === "february") {
  console.log(upperLetter, "has 28 days");
} else {
  console.log("Entered value is not a month.");
}*/

// 2.
let userInputMonth = prompt("Enter a month: ");
let month = userInputMonth.toLowerCase();
let year = parseInt(prompt("Enter a year: "));

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let upperLetter = capitalizeFirstLetter(month);

if (
  month === "january" ||
  month === "march" ||
  month === "may" ||
  month === "july" ||
  month === "august" ||
  month === "october" ||
  month === "december"
) {
  console.log(upperLetter, "has 31 days");
} else if (
  month === "april" ||
  month === "june" ||
  month === "september" ||
  month === "november"
) {
  console.log(upperLetter, "has 30 days");
} else if (month === "february" && year % 4 !== 0) {
  console.log(upperLetter, "has 28 days");
} else if (month === "february" && year % 4 === 0) {
  console.log(upperLetter, "has 29 days.");
} else {
  console.log("Entered value is not a month.");
}
