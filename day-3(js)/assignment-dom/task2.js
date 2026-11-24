// Task 2: 
// Create a web page that does the following:

// 1.Displays a form that asks for:
// o Text color (e.g., red, blue, #ff0000).
// o Background color (e.g., white, black, #ffffff).
// o The content of the text (e.g., "Hello, World!").
// 2.When the user submits the form:
// o The page should display the text below the form with the user's chosen text color, background color, and text content.


var form = document.getElementById("form");

form.addEventListener("submit",function(e){
    e.preventDefault();
    var textColor = document.getElementById("text-color").value;
    var backgroundColor = document.getElementById("bg-color").value;
    var textContent = document.getElementById("content").value;

    var outputPage = document.getElementById("output");

    if (!CSS.supports("color", textColor)) {
        outputPage.textContent = "Invalid text color!";
        return;
    }

    if (!CSS.supports("color", backgroundColor)) {
        outputPage.textContent = "Invalid background color!";
        return;
    }
    outputPage.style.backgroundColor = backgroundColor;
    outputPage.style.color = textColor;
    outputPage.textContent = textContent;
    
});
