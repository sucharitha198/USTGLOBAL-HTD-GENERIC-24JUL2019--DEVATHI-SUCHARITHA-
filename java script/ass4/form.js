let form = document.createElement('form');

let label1 = document.createElement('label');
label1.textContent = 'Name';
form.appendChild(label1);
let br1 = document.createElement('br');
form.appendChild(br1);
let ipt1 = document.createElement('input');
form.appendChild(ipt1);   
ipt1.type = 'text';
let br2 = document.createElement('br');
form.appendChild(br2);

let label2 = document.createElement('label');
label2.textContent = 'Age'; 
form.appendChild(label2);
let br3 = document.createElement('br');
form.appendChild(br3);
let ipt2 = document.createElement('input');
form.appendChild(ipt2);
let br4 = document.createElement('br');
form.appendChild(br4);

let label3 = document.createElement('label');
label3.textContent = 'Address';
form.appendChild(label3);
let br5 = document.createElement('br');
form.appendChild(br5);
let ipt3 = document.createElement('input');
form.appendChild(ipt3);
let br20 = document.createElement('br');
form.appendChild(br20);

let label4 = document.createElement('label');
label4.textContent = 'Date of Birth';
form.appendChild(label4);
let br6 = document.createElement('br');
form.appendChild(br6);
let ipt4 = document.createElement('input');
ipt4.type='date';
form.appendChild(ipt4);
let br7 = document.createElement('br');
form.appendChild(br7);

let label5 = document.createElement('label');
label5.textContent = 'Email';
form.appendChild(label5);
let br8 = document.createElement('br');
form.appendChild(br8);
let ipt5 = document.createElement('input');
form.appendChild(ipt5);
let br9 = document.createElement('br');
form.appendChild(br9);

let label6 = document.createElement('label');
label6.textContent = 'Gender';
form.appendChild(label6);
let br10 = document.createElement('br');
form.appendChild(br10);

let ipt7 = document.createElement('input');
form.appendChild(ipt7);
ipt7.name='m';
ipt7.type='radio';
let label7=document.createElement('label');
label7.textContent = 'Male';
form.appendChild(label7);

let ipt8 = document.createElement('input');
form.appendChild(ipt8);
ipt8.name='m';
ipt8.type='radio';
let label8=document.createElement('label');
label8.textContent = 'Female';
form.appendChild(label8);


console.log(form);
document.body.appendChild(form);
