// explcit types
var character;
var age;
var isLoggedIn;
age = 32;
isLoggedIn = true;
// arrays
var ninjas; // array of string
var turtles = []; // array of string; the "= []" initializes it
turtles.push("Josh");
// union types
var mixed = [];
mixed.push("hello");
mixed.push(32);
mixed.push(false);
console.log(mixed);
var uid;
uid = "123";
uid = "Peter";
console.log(uid);
// objects
var ninjaOne;
ninjaOne = { name: "yoshi", age: 30 };
ninjaOne = [];
var ninjaTwo;
ninjaTwo = { name: "Jackie", age: 35, beltColor: "purple" };
console.log(ninjaTwo);
