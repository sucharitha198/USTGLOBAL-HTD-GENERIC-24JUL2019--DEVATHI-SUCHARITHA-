//privacy 
function sum(a,b){
    function addsum(){
        return a+b;
    }
    return addsum;
}
var addFun=sum(23,80);
var total= addFun();
console.log('total= ',total);// , is used for concatination

console.log(window);
console.log(this);
console.log(window===this);

var name='Rakshith';
console.log(window.name);
console.log(this.name);
var person = {
    name:'dulquer salman',
    age:30,
    getname:function(){
        console.log(this.name);
        return this.name;
    }
}
var hero=person.getname();
console.log(hero);

var person = {
    name:'dulquer salman',
    age:30,
    getname:function(){
        console.log('getName method '+this);
        console.log(window);
        getData();
        function getData(){
            console.log('Get data Method '+this)
        }
        return this.name;
    }
}
var hero=person.getname();
console.log(hero);

