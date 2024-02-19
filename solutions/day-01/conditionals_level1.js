/*let userAge = prompt("Enter your age: ");

if (userAge >= 18) {
  console.log("You are old enough to drive");
} else {
  console.log(`You have to wait for ${18 - userAge} more years to drive`);
}*/

// 2.
/*let inputAge = prompt("Enter your age: ");
let myAge = 25;

if (inputAge < myAge) {
  console.log(`You are ${myAge - inputAge} years younger than me.`);
} else if (inputAge > myAge) {
  console.log(`You are ${inputAge - myAge} years older than me.`);
} else {
  console.log("We are the same age. ");
}*/

// 3. part 1: using if else
let a = 4;
let b = 3;

/*if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}*/

// 3. part 2: using ternary operator
a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${a} is less than ${b}`);
