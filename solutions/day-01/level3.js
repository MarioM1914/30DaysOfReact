let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//ages = ages.sort();
let minAge = Math.min(...ages);
let maxAge = Math.max(...ages);
console.log(ages);
console.log("Minimum age is: ", minAge);
console.log("Maximum age is: ", maxAge);

// or

/*let minAge = Infinity;
let maxAge = -Infinity;

for (let age of ages) {
  // find minimum value
  if (age < minAge) minAge = age;

  // find maximum value
  if (age > maxAge) maxAge = age;
}

console.log("Minimum age is: ", minAge);
console.log("Maximum age is: ", maxAge);*/

let medianAge = ages[Math.floor(ages.length / 2)];

if (ages.length % 2 != 0) {
  medianAge;
} else {
  medianAge =
    (ages[Math.floor(ages.length / 2) - 1] +
      ages[Math.floor(ages.length / 2)]) /
    2;
}
console.log(medianAge);

let sumAge = 0;
let avgAge = 0;
for (let i = 0; i < ages.length; i++) {
  sumAge += ages[i];
}
avgAge = sumAge / ages.length;
console.log(avgAge);

let rangeAges = maxAge - minAge;
console.log("Range ages: ", rangeAges);

const newCountries = [
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

console.log(newCountries.slice(0, 10));

let middleCountry = newCountries[Math.floor(newCountries.length / 2)];

if (newCountries.length % 2 != 0) {
  middleCountry;
} else {
  middleCountry =
    newCountries[Math.floor(newCountries.length / 2) - 1] +
    " " +
    newCountries[Math.floor(newCountries.length / 2)];
}

console.log(middleCountry);

// 3.
function divideCountries(newCountries) {
  const totalCountries = newCountries.length;
  const middleIndex = Math.ceil(totalCountries / 2);

  const firstHalf = newCountries.slice(0, middleIndex);
  const secondHalf = newCountries.slice(middleIndex);

  return [firstHalf, secondHalf];
}

const dividedCountries = divideCountries(newCountries);
console.log(dividedCountries);
