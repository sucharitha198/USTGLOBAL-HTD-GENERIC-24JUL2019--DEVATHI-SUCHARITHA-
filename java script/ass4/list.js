let ul1 = document.createElement('ul');
let li1 = document.createElement('li');
li1.textContent = 'apples';
let li2 = document.createElement('li');
li2.textContent = 'oranges';
let li3 = document.createElement('li');
li3.textContent = 'banana';
document.body.appendChild(ul1);
ul1.appendChild(li1);
ul1.appendChild(li2);
ul1.appendChild(li3);

console.log(ul1)