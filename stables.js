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
const charlie = new Horse("Charlie", "Chuck", 89, "strawberries", true);

let horses = [strawberry, beans, charlie];

for (let i = 0; i < horses.length; i++) {
    let horse = horses[i];
    let horseName = horse["name"];
    let favorite = horse["faveTreat"];
    let doesLikeBeans = favorite === "beans";

    if (doesLikeBeans) {
        return console.log(horseName + " loves beans!");
    }

    console.log(
        horseName + " doesn't like beans, only " + favorite + ", keep checking!"
    );
}

// horses = [
//   {
//     name: 'Strawberry',
//     faveTreat: 'carrots',
//     isInside: true,
//   },
//   {
//     name: 'Beans',
//     faveTreat: 'beans',
//     isInside: false,
//   },
//   {
//     name: 'Charlie',
//     faveTreat: 'strawberries',
//     isInside: true,
//   }
// ]
