function prime(n){
    if(n<=2 || n%2==0){
        console.log('not a prime');
    }else{
        console.log('prime no.');
    }
}
prime(11);
prime(6);

console.log('---IIFE--');
(function(n){
    if(n<=2 || n%2==0){
        console.log('not a prime');
    }else{
        console.log('prime no.');
    }
}(12));

console.log('---fat arraow--');
var prime=(n)=>{
    if(n<=2 || n%2==0){
        console.log('not a prime');
    }else{
        console.log('prime no.');
    }
}
prime(19);

console.log('---Anonymous---');
var prime = function(n){
    if(n<=2 || n%2==0){
        console.log('not a prime');
    }else{
        console.log('prime no.');
    }
}
prime(21);