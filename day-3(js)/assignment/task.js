// DUE TOMORROW

// Introduction to JavaScript
// Task 1:
// Write a JavaScript function that accepts a number as a parameter and
// checks whether the number is positive or not.
// Task 2:
// Write a JavaScript function to find the largest number in an array given as
// the parameter. (Use arrow function).
// Task 3:
// Write a program to find the area of a cylinder using JavaScript objects
// (radius, height and the area function should be in the object). (Area of a
// Cylinder= pi*r^2*h)
// Task 4:
// Write a program to find the area of a square and a rectangle using
// JavaScript objects with a common area function. (Use this
// keyword). (Area of a Rectangle/Square = length * breadth)

function isPositive(num){
    if(num > 0){
        console.log("The number is positive");
    }else{
        console.log("The number is not positive");
    }
}

isPositive(5);
isPositive(-3);