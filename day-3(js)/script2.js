//DOM Manipulation

//Creating Elements

const ul = document.querySelector('ul');
console.log(ul);


const li = document.createElement('li');
console.log(li);

//appending the element to the DOM
ul.append(li);

//modify texts
li.innerText='Training';

//modify attributes
li.setAttribute('id','heading');

//remove attributes
li.removeAttribute('id');



