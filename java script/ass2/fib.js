console.log('----fibonacci series----');
console.log('----named----');

fib(5);
function fib(val1){
    a=0 , b=1 , c=0;
    console.log(a);
    console.log(b);
    for (i=0;i<val1-2;i++){
        c=a+b;
        console.log(''+c);
        a=b;
        b=c;
    }
}        

console.log('----IIFE----');
(function(value){
    a=0 , b=1 , c=0;
    console.log(a);
    console.log(b);
    for (i=0;i<value-2;i++){
        c=a+b;
        console.log(''+c);
        a=b;
        b=c;
    }
}(4));

console.log('----fatarrow----');
var fib = (value)=>{
    a=0 , b=1 , c=0;
    console.log(a);
    console.log(b);
    for (i=0;i<value-2;i++){
        c=a+b;
        console.log(''+c);
        a=b;
        b=c;
    }
}
fib(4);

console.log('----anonymous---');
var fibo = function(val){
    a=0 , b=1 , c=0;
    console.log(a);
    console.log(b);
    for (i=0;i<val-2;i++){
        c=a+b;
        console.log(''+c);
        a=b;
        b=c;
    }
}
fibo(5);