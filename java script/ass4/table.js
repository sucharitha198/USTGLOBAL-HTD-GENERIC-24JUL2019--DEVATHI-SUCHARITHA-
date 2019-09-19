let table = document.createElement('table');
let tr1 = document.createElement('tr');
table.appendChild(tr1);
let trd1 = document.createElement('td');
trd1.textContent = 'Name';
tr1.appendChild(trd1);
let trd2 = document.createElement('td');
trd2.textContent = 'Age';
tr1.appendChild(trd2);

let tr2 = document.createElement('tr');
table.appendChild(tr2);
let tr2d1 = document.createElement('td');
tr2d1.textContent = 'suchi';
tr2.appendChild(tr2d1);
let tr2d2 = document.createElement('td');
tr2d2.textContent = 20;
tr2.appendChild(tr2d2);

let tr3 = document.createElement('tr');
table.appendChild(tr3);
let tr3d1 = document.createElement('td');
tr3d1.textContent = 'Rama';
tr3.appendChild(tr3d1);
let tr3d2 = document.createElement('td');
tr3d2.textContent = 21;
tr3.appendChild(tr3d2);

let tr4 = document.createElement('tr');
table.appendChild(tr4);
let tr4d1 = document.createElement('td');
tr4d1.textContent = 'Madhu';
tr4.appendChild(tr4d1);
let tr4d2 = document.createElement('td');
tr4d2.textContent = 22;
tr4.appendChild(tr4d2);

table.style.border = '1px solid black';
trd1.style.border = '1px solid black';
trd2.style.border = '1px solid black';
tr2d1.style.border = '1px solid black';
tr2d2.style.border = '1px solid black';
tr3d1.style.border = '1px solid black';
tr3d2.style.border = '1px solid black';
tr4d1.style.border = '1px solid black';
tr4d2.style.border = '1px solid black';


console.log(table);
document.body.appendChild(table);