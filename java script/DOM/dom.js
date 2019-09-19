//getElementById
let pElement = document.getElementById('demo');
console.log(pElement);
pElement.textContent = 'This is a new p tag';
//getElementsbyClassName
let divElements = document.getElementsByClassName('blue');
console.log(divElements);
//getElementsByTagName
let pElements = document.getElementsByTagName('p');
console.log(pElements);

let nameElements = document.getElementsByName('helement');
console.log(nameElements);

let demoElement = document.querySelector('#demo');
console.log(demoElement);

let blueClassElements = document.querySelectorAll('.blue');
console.log(blueClassElements);

let buttonElement = document.createElement('button') 
buttonElement.textContent = 'Click Me';
console.log(buttonElement);
document.body.appendChild(buttonElement);

let spanEle = document.getElementById('spanid');
spanEle.style.color = 'blue';

let buttonElement1 = document.getElementById('buttonEle');
//buttonElement1.classname = 'add';

buttonElement1.classList = 'add add1';

document.getElementById('demo1');
//pElement.style.color='green';
//pElement.className='blue';


