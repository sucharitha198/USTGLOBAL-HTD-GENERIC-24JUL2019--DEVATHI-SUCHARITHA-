var fruits = ['mango','banana','apple'];
console.log(fruits);

var slippers = new Array();
slippers[0] = 'belt';
slippers[1] = 'formals';
console.log(slippers);

var shoes = new Array('formals',3000,36);
console.log(shoes);

var person = {
    name: 'suchi',
    height: 5.1,
    color: 'white',
}
console.log(person);

function frui(){
  
    setTimeout (function(){
        var fruits = ['mango','banana','apple'];
        console.log(fruits);
    },1000)
}
function perso(){
    var p = {
        name: 'suchi',
        height: 5.1,
        color: 'white',
    }
    console.log(person);
}
frui();
perso();




var n=[2,10,4,3,234,32536,546,5];
function add(){
    sum=0;
    for(i=0;i<n.length;i++){
    sum=sum+n[i];
}
console.log(sum);
}
add();

function circ(r){
    var s =0;
    s =2*Math.PI*r;
    console.log(s);
}circ(2);

function f(v){
    fact = 1;
    for(i=1;i<=v;i++){
    fact = fact*i;
    }
    console.log(fact);
}f(8);

function p(y){
    if(n%2 || n<=0){
        console.log("not a prime no.");
    }else{
        console.log('prime');
    }
}p(6)