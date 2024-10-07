// LESSON-3 Code
let horseName = "Coolguy"; 

horseName = "Charlie";
let horseNickname = "Chuck";
let horseAge = 1;
let isHorseInside = false;

// LESSON-4 Code
const STABLE_MONTHLY_FEE = 117; // uppercase is preferred for constants
let stableIntroduction = `Welcome to "${horseName}'s" stable`;
console.log(stableIntroduction);
console.log(`My horse's name is ${horseName} and it costs ${STABLE_MONTHLY_FEE} to board them!`);

// LESSON-5 Code
if(isHorseInside) {
    document.write(horseName + " is inside!")
} else {
    document.write(horseName + " is outside!");
}

// let visitingHorseName = "🍓 Strawberry";

// if ((horseName === "Charlie" && isHorseInside) && (visitingHorseName === "🍓 Strawberry" || visitingHorseName === "🥬 Lettuce")) {
//     console.log(`${horseName} has a visitor and needs to come outside to see ${visitingHorseName}`);
// } else if ((horseName === "Charlie" && !isHorseInside) && (visitingHorseName === "🍓 Strawberry" || visitingHorseName === "🥬 Lettuce")) {
//     console.log(horseName + " is outside with " + visitingHorseName);
// } else {
//     console.log(horseName + " needs to figure what is going on");
// }
