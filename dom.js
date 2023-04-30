var itemList = document.querySelector('#items');
//Parent node//
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// Parent Element//
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//Child NOdes//

// console.log(itemList.childNodes);

// console.log(itemList.children);
// itemList.children[1].style.backgroundColor = 'yellow';

//First chile//
// console.log(itemList.firstChild);

//FirstElementChild//
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello world';

//LastElementChild//
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

//Next Siblings//
// console.log(itemList.nextSibling);

// //Next ElementSiblings//
// console.log(itemList.nextElementSibling);

//Previous Siblings//
// console.log(itemList.previousSibling);

//Previous ElementSiblings//
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//CreateEliment//

//Create a div
var newDiv = document.createElement('div');
// console.log(newDiv);
newDiv.className = 'hello';
newDiv.id = 'hello 1';
newDiv.setAttribute('title', 'Hello Div');

//Create a text node
var newDivText = document.createTextNode('Hello world');
newDiv.appendChild(newDivText);
console.log(newDiv);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv, h1);
