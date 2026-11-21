
// Task 4:
// Write a program to find the area of a square and a rectangle using
// JavaScript objects with a common area function. (Use this
// keyword). (Area of a Rectangle/Square = length * breadth)

let area = {
    length : 5,
    breadth: 5,
    findarea : function(){

        if(this.length==this.breadth){
            return console.log("This is the area of a square"+this.length*this.length);
        }
        else{
            return console.log("this is the area of a rectangle"+this.length*this.breadth);
        }
        
    }

    
}
area.findarea();