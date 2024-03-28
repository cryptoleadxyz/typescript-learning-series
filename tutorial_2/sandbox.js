var character = "luigi";
console.log(character);
var inputs = document.querySelectorAll("input");
console.log(inputs);
for (var i = 0; i < inputs.length; i++) {
    console.log(inputs[i]);
}
inputs.forEach(function (input) {
    console.log(input);
});
