// DOM Events
// Mouse Events
//click
const boxOne = document.querySelector("#box1");
function alertBtn() {
  alert("You clicked Box 1.");
}
// boxOne.addEventListener("click", alertBtn);
boxOne.addEventListener("click", alertBtn);

// //dblclick
const boxTwo = document.querySelector("#box2");
function alertBtn2() {
  alert("You double clicked Box 2.");
}
boxTwo.addEventListener("dblclick", alertBtn2);

//mouse over

const boxThree = document.querySelector("#box3");
function alertBtn3(){
    alert("you moved your mouse in box3");
}
boxThree.addEventListener("mouseover",alertBtn3);

//mouse out
const boxFour = document.querySelector("#box4");
function alertBtn4(){
    alert("you moved your mouse in box4");
}
boxFour.addEventListener("mouseout",alertBtn4);

//mouse move

const boxFive = document.querySelector("#box5");
function alertBtn5(){
    alert("you moved your mouse in box5");
}
boxFive.addEventListener("mousemove",alertBtn5);




