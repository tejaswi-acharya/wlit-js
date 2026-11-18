// let x =15;
// console.log(x);

// console.log(typeof x);
// console.log(typeof typeof x);

// let y = true;
// console.log(typeof y);

// let a = null;
// console.log(a);
// console.log(b);

// console.log(null == undefined);
// console.log(null === undefined);


// dosomething();  //this is the concept of hoisting in javascript. function declaration is hoisted to the top of the scope. so we can call the function before its declaration. 

// function dosomething() {
//     let a = 10;
//     console.log(a);
// }

// console.log(x);
// let x =2;


// let _x=10;
// let $y = 20;
// // let 4x = 30; // this is invalid variable name because variable name cannot start with a number. 
// let x =50;
// console.log(x>50?"a":"b");


// let grade = 10;

// if (grade>=90){
//     console.log("A");
// } else if (grade>=80){
//     console.log("B");
// } else if (grade>=80){
//     console.log("C");
// } else {
//     console.log("D");
// }


// let x = 50;
// switch(x){
//     case 1:
//         console.log("Print 1");
//         break;
//     case 2:
//         console.log("Print 2");
//         break;
//     case 3:
//         console.log("Print 3");
//         break;
//     default:
//         console.log("Print 4");
// }

// while(condition){
//     statements
// }

// let x =22;
// while (x<28){
//     console.log(x);
//     x++;
// }
// let x =0;
// do{
//     console.log("this si a do whjile loop "+x);
//         x++;
// }while(x<5);


// function dosomething(){
//     console.log("this is a function");
// }
// dosomething();



// function multiply(a,b){
//     return (a*b);
// }

// console.log(multiply(2,4));


// var dosomething = ()=>{console.log("this is a random arrow function hahhaha");}
// dosomething();

//write a js fun that accepts a num as a parameter and checks whether the number is positve or not

function check(num){
    if(num>0){
        console.log("The number is positive");
    } else {
        console.log("The number is not positive");
    }
}

check(2);