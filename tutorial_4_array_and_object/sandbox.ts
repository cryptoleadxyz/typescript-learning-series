// Arrays
let names = ["luigi", "mario", "yoshi"];

names.push("toad");
// names.push(30); // doesn't work
// names[0] = 45; // doesn't work
// names = 7; // doesn't work because you can't change the variable type

let numbers = [10, 20, 30, 40];
numbers.push(25);

// can make a mixed array
let mixed = ["adsfsa", 34, "5434423", 2314124, "1qq234aw"];
mixed.push("ryu");
mixed.push(4);
mixed[0] = 3;

// Objects
let ninja = {
  name: "mario", // these behave like variables so we can't change its type
  belt: "black",
  age: 30,
};

ninja.name = "ryu";
ninja.belt = "pink";
// ninja.age = '31'; // doesn't work
// ninja.skills = ['fighting', 'sneaking'] // doesn't work

// but it can be updated to be a different object BUT only with exactly the same attribute/structure/type
ninja = {
  name: "yoshi",
  belt: "pink",
  age: 99,
};
