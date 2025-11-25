## **1. Strings & Numbers**
Write a function `describeHorse(name, age)` that returns a string like:

`"Beans is 12 years old."`

Call the function for all three horses with these ages:

- Beans → 10  
- Charlie → 7  
- Strawberry → 5

---

## **2. Booleans**
Given:

```js
let beansFed = false;
let charlieFed = true;
let strawberryFed = false;
```

Write an `if/else` statement that logs:

- `"All horses are fed!"` if all values are `true`
- `"Some horses still need food!"` otherwise

---

## **3. Arrays**
Create an array `horseNames` with all three horse names.

Write a **for loop** that logs each name.

Also log `horseNames.length`.

---

## **4. Objects**
Create an object `beans`, you can change the values of each property if you like:

```js
{
  name: "Beans",
  favoriteSnack: "carrots",
  age: 10
}
```

Write code to:

- Log each property  
- Add a new property: `isCool: true`

---

## **5. Conditionals + Strings**
Write a function `groomHorse(name, needsGrooming)` that:

- Accepts `name` as a string, and `needsGrooming` as a boolean
- If `name` is `"Charlie"`, and `needsGrooming` is `true` → returns `"Charlie needs grooming!"`
- Otherwise → returns `"Charlie is already groomed!"`

Call it for all three horses with any boolean values you choose. 
Save the return value of each function call in a variable, and log out each variable.

---

## **6. Arrays + Objects**
Create an array `stable` containing three horse objects (Beans, Charlie, Strawberry).  
Each horse should include:

- `name`
- `age`
- `isHungry`

Write a function `countHungryHorses(stable)` that returns the number of horses where `isHungry` is `true`.

---

## **7. Methods**
Create an object:

```js
const stable = {
  name: "Sunny Acres",
  horses: ["Beans", "Charlie", "Strawberry"],
  addHorse(horseName) {
    // your code
  }
};
```

Write the `addHorse` method so it adds a new name into the `horses` array.  
Call: `stable.addHorse("Pumpkin")`.
