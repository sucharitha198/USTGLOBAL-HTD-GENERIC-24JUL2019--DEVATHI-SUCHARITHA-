var todaysdate=new Date();
console.log(todaysdate);
console.log(todaysdate.getMonth());

var date1=new Date(2019,7,26,5,40,0,0);
console.log(date1);
var date2=new Date(1223);
console.log(date2);
var date3=new Date("september 07,2019 11:13:00");
console.log(date3) 
var months=['jan','feb','mar','apr','may',
                 'jun','jul','aug','sep','oct','nov','dec']
console.log("Month= "+months[todaysdate.getMonth()]);
for(var i=0;i<12;i++)
{
    console.log(todaysdate.getMonth(i))
}
console.log('---------------------')
console.log(Math.PI);
console.log(Math.floor(4.5));
console.log(Math.ceil(4.5));
console.log(Math.round(4.2))
console.log(Math.round(4.5))
console.log(Math.pow(16,8))
console.log(Math.random())
console.log(Math.random())
console.log( Math.ceil(Math.random()*100))
console.log('---------------------')
var number = 10;
var number1 ='10';
if(number===number1){
    console.log("equal");
}else{
    console.log("not equal");
}
console.log('-----typeof operator----')
console.log(typeof(number));
console.log(typeof(number1));
var num;
console.log(typeof num);
var number=null;
console.log(typeof number);
var value=true;
console.log(typeof value);
var person=['akshay',20,'white'];
console.log(typeof person)
console.log('-----Ternary operator-------')
var age = 21;
var checkage=(age>21)?'Greater':(age===21)?'Equal':'lesser';
console.log(checkage);
console.log('----complex Array-----')
var employees=[
    {
        name:'varun',
        age:29
    },
    {
        name:'deepika',
        age:34
    },
    {
        name:'bhagath',
        age:90
    }
];

for(i=0;i<employees.length;i++)
{
    console.log(employees[i]);
}
console.log('----for in loop----')
for(index in employees){
    console.log(employees[index]);
}
console.log('------for of loop----')
var employees=['varun','deepika','bhagath']
for(var val of employees){
    console.log(val);
}