// 1.Declare variables to store your first name, last name, marital status, country and age in  single line
let name = "arun",
  age = 25;
console.log(name, age);

//2 Swapping 2 numbers
function swapNumbers(a, b) {
  const temp = a;
  a = b;
  b = temp;

  console.log("a = " + a, "b =" + b);
}

swapNumbers(5, 10);

//3Power of any number x ^ y.
console.log(Math.pow(2, 3));

// Find the person is ur friend or not.
const friends = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];
function dataHandling(input, name) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === name) return true;
  }

  return false;
}
let found = dataHandling(friends, "jeff");
console.log(found);

// We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
var friends1 = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];
var friends2 = ["Gabbar", "Rajinikanth", "Mass", "Spiderman", "Jeff", "ET"];
console.log(friends1.concat(friends2).sort());

myobject = { 1: one, 11: 1, name: "arun" };
console.log(myobject.name);
