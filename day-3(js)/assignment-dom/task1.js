// Task 1:
// Create a web page that does the following:
// 1.Displays a heading that says: "Watch me grow!"
// 2.Includes an input box where the user can enter a number (e.g., 20, 50, 100).
// 3.Has a button labeled "Change Font Size".
// 4.When the button is clicked, the heading's font size should
// change according to the number entered by the user (in pixels).

var text = document.getElementById("title");

var button = document.getElementById("submit");

button.addEventListener("click", function(e){
   
    var inputNumber = document.getElementById("input-box");
    text.style.fontSize=inputNumber.value+"px";
    inputNumber.value="";


});

