//to check array or not
var hobbies=['singing','dancing','numismatics'];
var checkArray=Array.isArray(hobbies);
console.log('isArray is ' +checkArray);
//to check the element is present or not in the array
var checkIncludes = hobbies.includes('singing');
console.log('checlIncludes  = '+checkIncludes);
//
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
//indexOf returns the index of the given ele,
var index=hobbies.indexOf('chess');
console.log('index of chess ' +index);
     //new array---doesnot modify the original array
var num=[10,20,30,40,50]
var num1=num.map((value,index)=>{
    value+=10;
    return value;
})      
//usage of fatarrow() directly return the value if there is only one stmt
var num1=num.map((val=>(val+=10)));
console.log(num1);
var num2=num.filter((value)=>{
    return value>20;
})             //filter method doesnt modify the original array
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


console.log('--NESTED ARRAY---');
const items=['lipstick',['powder','kajal'],'deo'];
console.log(items); 