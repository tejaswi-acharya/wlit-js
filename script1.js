//1. DOM Manipulation

const title = document.querySelector('#heading');
console.log(title);

title.style.color = 'purple';
title.textContent = 'hahahahahhahahahha';

const items = document.querySelectorAll('.item-list');
console.log(items);
items.style.color = 'blue'; // This line will throw an error because items is a NodeList, not a single element. You need to loop through the NodeList to apply styles to each item.

