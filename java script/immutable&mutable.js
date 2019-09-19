console.log('---Primitive are IMMUTABLE-----');
var m='Hello ';
console.log(m);
var m=m+'world';
console.log(m);
var m1=m;
console.log(m1);
var m='Hi';
console.log(m);


console.log('-------Objects are Mutable---------');
var person={
    name:'samantha',
    age:30,
    color:'white'
}
console.log(person);
person.name='kajal';
console.log(person);
var person1=person;
console.log(person1);
person1.name='rajni';
console.log(person1);

var person2={
    name:'samantha',
    age:30,
    color:'white'
}
console.log(person2);

console.log('--------------');
function first(){
        console.log('first');
    }
function second(){
    console.log('Second');
}
first();
second();

console.log('--setTimeout---');
function first(){
    setTimeout(function(){
        console.log('first');
    },10000);
}
function second(){
    console.log('Second');
}
first();
second();

console.log('---if time is not given also it will go to WEBAPI');
console.log('--setTimeout---');
function first(){
    setTimeout(function(){
        console.log('first');
    });
}
function second(){
    console.log('Second');
}
first();
second();

console.log('----1st settimeout will execute next CALLBACKFUNCTION----');

function first(callback){
    setTimeout(function(){
        console.log('first');
        callback(); 
    },1000);
    console.log('This is first')
}
function second(){
    console.log('second');
}
first(second);