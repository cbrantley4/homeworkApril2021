// create five variables and assign them values
const catsName = "Gan";
let catAge = 1;
let happyPet = true;
let spayAge = null;
let relationshipType;
// each variable should reference a different primitive data type
// ! REMEMBER: you should never DELIBERATELY assign "undefined" to a variable

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(
  typeof catsName,
  typeof catAge,
  typeof happyPet,
  typeof relationshipType,
  typeof spayAge
);

// create a variable that references a template literal
// inside the template literal, use two variables
let greeting = `My name is ${catsName} and I am ${catAge} years old`;
console.log(greeting);
// reassign the value of the variable that references "null"
spayAge = 1.5;
// print the value and its type
console.log(spayAge);
console.log(typeof spayAge);
// print a variable that causes a ReferenceError
console.log(relationshipType);
// alter the previous line to no longer cause a ReferenceError
relationshipType = "Friendly";
console.log(typeof relationshipType);
