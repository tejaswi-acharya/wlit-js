// Task 1:
// Create a web page that does the following:
// 1.Displays a heading that says: "Watch me grow!"
// 2.Includes an input box where the user can enter a number (e.g., 20, 50, 100).
// 3.Has a button labeled "Change Font Size".
// 4.When the button is clicked, the heading's font size should
// change according to the number entered by the user (in pixels).

let title = document.getElementById("heading");
let input =document.getElementById("inputbox")



let button = document.getElementById("button");
button.addEventListener("click",(e)=>{

    let size = input.value;
    title.style.fontSize = size+"px";
    e.preventDefault();
    input.value = "";
});

