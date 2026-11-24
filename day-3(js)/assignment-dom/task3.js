// Task 3: 
// Create a web page that:
// 1.Defines an object animal with a method makeSound() that returns "Some sound".
// 2.Defines another object dog with a property name: "Buddy".
// 3.Uses __ proto __
// 4.Logs the output of dog.makeSound() to the console. to inherit makeSound() from animal into dog.

var animal = {
    makeSound:function(){
        return"Some Sound";
    }
};

var dog ={
    name: "Buddy"
};

dog.__proto__=animal;
console.log(dog.name);
console.log(dog.makeSound());