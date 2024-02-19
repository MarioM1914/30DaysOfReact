/*let grade = parseInt(prompt("Enter student's grade: "));

switch (true) {
  case grade >= 90 && grade <= 100:
    console.log("Grade: A");
    break;
  case grade >= 70 && grade <= 89:
    console.log("Grade: B");
    break;
  case grade >= 60 && grade <= 69:
    console.log("Grade: C");
    break;
  case grade >= 50 && grade <= 59:
    console.log("Grade: D");
    break;
  case grade >= 0 && grade <= 49:
    console.log("Grade: F");
    break;
  default:
    console.log("You entered a value less than 0 or more than 100.");
}*/

// or using if else

/*let grade = prompt("Enter students grade: ");

if (grade >= 90 && grade <= 100) {
  console.log("Grade: A");
} else if (grade >= 70 && grade <= 89) {
  console.log("Grade: B");
} else if (grade >= 60 && grade <= 69) {
  console.log("Grade: C");
} else if (grade >= 50 && grade <= 59) {
  console.log("Grade: D");
} else if (grade >= 0 && grade <= 49) {
  console.log("Grade: F");
} else {
  console.log("You entered number less than 0 or more than 100.");
}*/

// 2.
/*let userInput = prompt("Enter the month: ");
let month = userInput.toLowerCase();

switch (month) {
  case "september":
  case "october":
  case "november":
    console.log("The season is Autumn.");
    break;
  case "december":
  case "january":
  case "february":
    console.log("The season is Winter.");
    break;
  case "march":
  case "april":
  case "may":
    console.log("The season is Spring.");
    break;
  case "june":
  case "july":
  case "august":
    console.log("The season is Summer.");
    break;
  default:
    console.log("Entered value was not the month.");
}*/

// or using if else
/*let userInput = prompt("Enter the month: ");
let month = userInput.toLowerCase();

if (month === "september" || month === "october" || month === "november") {
  console.log("The season is Autumn.");
} else if (
  month === "december" ||
  month === "january" ||
  month === "february"
) {
  console.log("The season is Winter.");
} else if (month === "march" || month === "april" || month === "may") {
  console.log("The season is Spring.");
} else if (month === "june" || month === "july" || month === "august") {
  console.log("The season is Summer.");
} else {
  console.log("Entered value was not the month.");
}*/

// 3.
let userInputDay = prompt("What is the day today? ");
let day = userInputDay.toLowerCase();

switch (day) {
  case "monday":
    console.log("Monday is a working day.");
    break;
  case "tuesday":
    console.log("Tuesday is a working day.");
    break;
  case "wednesday":
    console.log("Wednesday is a working day.");
    break;
  case "thursday":
    console.log("Thursday is a working day.");
    break;
  case "friday":
    console.log("Friday is a working day.");
    break;
  case "saturday":
    console.log("Saturday is a weekend.");
    break;
  case "sunday":
    console.log("Sunday is a weekend.");
    break;
  default:
    console.log("Entered value was not a day.");
}
