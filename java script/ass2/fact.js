console.log('----named------')
fact(5);
 function fact(value){
    var fact=1;
    if(fact>0){
     for(var i=1;i<=value;i++)
         fact*=i; 
     }
     console.log(fact);
 }
console.log('-------fatarrow-------');
 var fact=(value)=>{
     fact=1;
     for (i=1;i<=value;i++){
         fact*=i;
     }
         return fact;
 }
 var store=fact(5);
 console.log(store);

 console.log('------IIFE------');
 (function(value){
    fact=1;
    for (i=1;i<=value;i++){
        fact*=i;
    }
 }(5));
 console.log(fact);

 console.log('------Anonymous------');
 var fact = function(value){
    fact=1;
    for (i=1;i<=value;i++){
        fact*=i;
    }
    return fact;
 }
 var store = fact(5);
 console.log(store);