var hobbies=['singing','dancing','numismatics'];

var checkArray=Array.isArray(hobbies);
console.log('isArray is ' +checkArray);

var checkIncludes = hobbies.includes('singing');
console.log('checlIncludes  = '+checkIncludes);

hobbies.push('sleeping','volleyball');
console.log('hobbies after push ' +hobbies);

hobbies.pop();
console.log('hobbies after pop '+hobbies);

hobbies.unshift('gardening','shopping');
console.log('hobbies after unshift ' +hobbies);

hobbies.shift();
console.log('hobbies after shift ' +hobbies);

var checksplice =hobbies.splice(2,2,'chess','jumping');
console.log('hobbies after splice '+checksplice);

var checkslice = hobbies.slice(1,2)
console.log('hobbies after slice ' +checkslice);

var checkjoin=hobbies.join('-');
console.log('array converted to string'+checkjoin);

var index=hobbies.indexOf('chess');
console.log('index of chess ' +index);

var num=[10,20,30,40,50]
var num1=num.map((value,index)=>{
    value+=10;
    return value;
})      

var num1=num.map((val=>(val+=10)));
console.log(num1);
var num2=num.filter((value)=>{
    return value>20;
})          
console.log(num2);
var items=[{
    name:'lipstick',
    price:95,
    id:1
},
{
    name:'perfume',
    price:500,
    id:2
},
{
    name:'watch',
    price:1000,
    id:3
},
{
    name:'shoes',
    price:2000,
    id:4
}]
var item1= items.map(function(item){
    item.price=item.price+100;
    return item;
})
console.log(item1);
var filter=items.filter(function(item){
    var item1=item.price>100 && item.name.length>7;
    return item1; 
})
console.log(filter);

console.log('-----------EXAMPLE 2---------')

var games=['chess','carroms','shuttle'];

var checkArray=Array.isArray(games);
console.log('isArray is ' +checkArray);

var checkIncludes = games.includes('carroms');
console.log('checkIncludes  = '+checkIncludes);

games.push('cricket','volleyball');
console.log('Games after push ' +games);

games.pop();
console.log('Games after pop '+games);

games.unshift('skipping','table tennis');
console.log('GAMES after unshift ' +games);

hobbies.shift();
console.log('Games after shift ' +games);

var checksplice = games.splice(2,2,'chess','cricket');
console.log('Games after splice '+checksplice);

var checkslice = games.slice(1,2)
console.log('Games after slice ' +checkslice);

var checkjoin=games.join('-');
console.log('array converted to string'+checkjoin);

var index=games.indexOf('chess');
console.log('index of chess ' +index);

var num=[90,10,32,41,50]
var num1=num.map((value,index)=>{
    value+=10;
    return value;
})      

var num1=num.map((val=>(val+=10)));
console.log(num1);
var num2=num.filter((value)=>{
    return value>20;
})          
console.log(num2);
var items=[{
    name:'lipstick',
    price:95,
    id:1
},
{
    name:'perfume',
    price:500,
    id:2
},
{
    name:'watch',
    price:1000,
    id:3
},
{
    name:'shoes',
    price:2000,
    id:4
}]
var item1= items.map(function(item){
    item.price=item.price+100;
    return item;
})
console.log(item1);
var filter=items.filter(function(item){
    var item1=item.price>100 && item.name.length>7;
    return item1; 
})
console.log(filter);


