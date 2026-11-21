// Task 2:
// Write a JavaScript function to find the largest number in an array given as
// the parameter. (Use arrow function).



 let a=[1,2,3,4,5,6,90,635,22];
var findlarge = (a)=>{
    let max = a[0];
    for(let i=0;i<a.length;i++){
        if(a[i]>max){
            max = a[i];
        }
    }
    console.log("The largest number in the array is: "+max);
}

findlarge(a);

var findlarge = (a)=>{
    return console.log(Math.max(a));
}

findlarge(a);
