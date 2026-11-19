// DOM Events

//Keyboard Events

// keydown

// const boxOne = document.querySelector("#box1");
// console.log(boxOne);

// function alertBtn() {
//   alert(" You pressed a key in BOX 1");
// }
// boxOne.addEventListener("keydown", alertBtn);

// // key press
// const boxThree = document.querySelector("#box3");
// function alertBtn3() {
//   alert("You pressed a key inside Box 3.");
// }
// boxThree.addEventListener("keypress", alertBtn3);

const textInput = document.getElementsByClassName("textInput")[0];
textInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    console.log("Entered text:", textInput.value);
  }
});

// const textInput = document.getElementsByClassName("textInput")[0];
// textInput.addEventListener("keydown", function (event) {
//   if (event.key == "Enter") {
//     console.log("Entered text:", textInput.value);
//   }
// });

// const textInput = document.getElementByClassname("textInput")[0];