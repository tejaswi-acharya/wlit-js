// Task 4:
// Create a web page that:
// 1.Has an array: let colors = ["red", "blue", "green", "yellow"];
// 2.Use splice() to replace "green" with "purple".
// 3.Then use slice() to make a new array with the first two colors.
// 4.Show both arrays in the console.
let colors = ["red","blue","green","yellow"];
var deleted= colors.splice(2,1,"purple");

console.log(colors);

console.log(deleted);

let newarray=colors.splice(0,2);
console.log(newarray);
console.log(colors);