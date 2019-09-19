console.log('-----circumference of a circle----')
console.log('---named---');
circ(4);
function circ(r){
  sum=2*Math.PI*r;
    }
console.log(sum);
console.log('---IIFE---');
(function(r){
    sum=2*Math.PI*r;
}(10));
console.log(sum);

console.log('---fatarrow---');
var circ=(val)=>{
    sum=2*Math.PI*r;
}
console.log(sum); 

console.log('---Anonymous---');
var circ = function(r){
    sum=2*Math.PI*r;
}
circ(4);
console.log(sum);