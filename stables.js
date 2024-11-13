function Horse(name, nickname, age, faveTreat, isInside) {
    this.name = name;
    this.nickname = nickname;
    this.age = age;
    this.faveTreat = faveTreat;
    this.isInside = isInside;
    this.rent = 125;
    this.intro = function () {
        console.log(
            `My horse is called ${this.name} and they are ${this.age} years old!`
        );
    };
}

const strawberry = new Horse("Strawberry", "Shortcake", 3, "carrots", true);
const beans = new Horse("Beans", "Beanie", 5, "beans", false);
const charlie = new Horse("Charlie", "Chuck", 13, "raspberries", true);

console.log(strawberry);
console.log(beans);
console.log(charlie);
console.log(typeof charlie);

var numbers = [10, 20, 30, 40, 50];
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// let stableIntroduction = `Welcome to "${horseName}'s" stable`;
// let horseIntro = `There are ${horseNames.length} horses staying at my stables: ${horseNames[0]}, ${horseNames[1]}, ${horseNames[2]}!`;

// function getHorseLocation(horse) {
//     if (areHorsesInside[horse]) {
//         return horseNames[horse] + " is inside.";
//     }

//     return horseNames[horse] + " is outside";
// }

// function getHorseNicknames(horse, friend) {
//     let string = `${horseNames[horse]}'s nickname is ${horseNicknames[horse]}, and they have a friend named ${horseNames[friend]}, who is nicknamed ${horseNicknames[friend]}!`;

//     return string;
// }
