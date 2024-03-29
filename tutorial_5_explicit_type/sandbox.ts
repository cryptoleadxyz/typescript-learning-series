// explcit types
let character: string;
let age: number;
let isLoggedIn: boolean;

age = 32;
isLoggedIn = true;

// arrays
let ninjas: string[]; // array of string
let turtles: string[] = []; // array of string; the "= []" initializes it

turtles.push("Josh");

// union types
let mixed: (string | number | boolean)[] = [];
mixed.push("hello");
mixed.push(32);
mixed.push(false);
console.log(mixed);

let uid: string | number;
uid = "123";
uid = "Peter";
console.log(uid);

// objects
let ninjaOne: object;
ninjaOne = { name: "yoshi", age: 30 };
ninjaOne = [];

let ninjaTwo: {
  name: string;
  age: number;
  beltColor: string;
};

ninjaTwo = { name: "Jackie", age: 35, beltColor: "purple" };
console.log(ninjaTwo);
