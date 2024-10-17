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
console.log(
    `My horse's name is ${horseName} and it costs ${STABLE_MONTHLY_FEE} to board them!`
);

// LESSON-5 Code
if (isHorseInside) {
    console.log(horseName + " is inside!");
} else {
    console.log(horseName + " is outside!");
}

// LESSON 6 CODE
// Horse = [Charlie, Strawberry, Beans]
let horseNames = [horseName, "Strawberry", "Beans"];
let horseAges = [horseAge, 2, 10];
let horseLocations = [isHorseInside, false, true];
console.log(`Welcome to my stables! There are ${horseNames.length} horses staying here! Their names are: ${horseNames[0]}, ${horseNames[1]}, ${horseNames[2]}`);
console.log("Welcome to my stables! There are " + horseNames.length + " horses staying here! Their names are " + horseNames[0] + ", " + horseNames[1] + ", " + horseNames[2] + "!");
if(horseLocations[2]){
    console.log(horseNames[2] + " is outside!");
}
console.log(horseAges[2] + horseAges[1]); //12

if(horseNames[0] === "Charlie") {
    console.log("Hi Charlie!")
}

if(horseNames.length < 5) {
 console.log("These stables are unpopular");
}