// LESSON-3 Code
let horseName = "Coolguy"; 
let fakeVariable = ")";
console.log(horseName);
horseName = "Charlie";
console.log(horseName);
let horseAge = 5;
console.log(horseAge);
let isHorseInside = true;
console.log(isHorseInside);

// LESSON-4 Code
console.log(typeof fakeVariable);
const STABLE_MONTHLY_FEE = 117; // uppercase is preferred for constants
console.log(STABLE_MONTHLY_FEE);

console.log("The stable monthly fee is " + STABLE_MONTHLY_FEE); // concatenation
console.log("My horse's name is " + horseName + "and he is " + (horseAge - 3) + " years old");
console.log(`My horse's name is ${horseName} and costs ${STABLE_MONTHLY_FEE} to board him`);
console.log("My horse is grey");
console.log(STABLE_MONTHLY_FEE - 20); 
console.log(false + 2); // type coercion
console.log(false + "NaN");



const STABLE_MONTHLY_FEE = 100;
let horseIntroduction = " is the name of my horse";
// let rentIntroduction = "it costs " + STABLE_MONTHLY_FEE + " to board " + horseName;
let rentIntroduction = `It costs ${STABLE_MONTHLY_FEE} to board ${horseName}`;
// let stableIntroduction = "Welcome to " + horseName + "'s stable 🐴";
let stableIntroduction = `Welcome to "${horseName}'s" stable`;
console.log(stableIntroduction);
