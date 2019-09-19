var hobbies=['carrom','photography', ' ','football','mono acting'];
// hobbies[hobb]='playing';
hobbies.forEach(function(value,index){
    if(value.length>4)
    console.log(value);
});
console.log('--VARIABLE HOIST--');
console.log(myname);  //error 
 var myname='sucharitha';  //undefined

 //All declarations are assigned to top by HOIST
console.log(myname);
myname('SUCHARITHA ');
function getAge(){
    console.log(age);
    age=20;
}
getAge();
