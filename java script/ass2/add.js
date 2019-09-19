console.log('----sum of no.s in array----');
console.log('--named--');  
    var num=[10,20,30,40,50];
function add(){
var addition=0;
for(var i = 0;i<num.length;i++){
    addition+=num[i];
    }
    console.log(addition);
    }
    add();

console.log('---IIFE---');
(function(){
    var addition=0;
for(var i = 0;i<num.length;i++){
    addition+=num[i];
    }
    console.log(addition);
}());

console.log('---fat arrow---');
var add=()=>{
    var addition=0;
    for(var i = 0;i<num.length;i++){
        addition+=num[i];
        }
        console.log(addition);
}
add();

console.log('---Anonymous---');
var add = function(num){
    var addition=0;
    for(var i = 0;i<num.length;i++){
        addition+=num[i];
        }
        console.log(addition);
}
var num=[10,20,30];
add(num);