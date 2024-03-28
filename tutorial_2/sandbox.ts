const character = "luigi";
console.log(character);
const inputs = document.querySelectorAll("input");
console.log(inputs);

for (let i = 0; i < inputs.length; i++) {
  console.log(inputs[i]);
}

inputs.forEach((input) => {
  console.log(input);
});
