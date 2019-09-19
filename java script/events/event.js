function sayHello(){
    alert('Hello!!!!!!!!!!!!!!!!');
}
let buttonElement = document.getElementById('clickButton');
buttonElement.onclick= function(){
    alert('Hello World');
}

function createPElement(){
    let pElementData = document.createElement('p');/*element created*/
    pElementData.textContent = 'This is a p Element';
    document.body.appendChild(pElementData); /*adding that element to body*/
}
/*let PEle = document.getElementById('pElement');
PEle.onclick = function(){
    alert('HIIIIIII');
}*/


let PEle = document.getElementById('pElement');
PEle.addEventListener('click',function(){
    alert('Good Eve');
});

let h1ele =  document.createElement('h1');
function showText(){
    let ele = document.getElementById('showData');
    console.log(ele.value);    /*o/p in console*/

   
   h1ele.textContent = ele.value;
  document.body.appendChild(h1ele);
}