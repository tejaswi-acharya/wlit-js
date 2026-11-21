// Task 3:
// Write a program to find the area of a cylinder using JavaScript objects
// (radius, height and the area function should be in the object). (Area of a
// Cylinder= pi*r^2*h)

let cylinder = {
    radius: 5,
    height : 2,
    area : ()=>{
        let ar = 3.14*this.radius*this.radius*this.height;
        return console.log("The area of the cylinder is:"+ar);
    }
};

cylinder.area();