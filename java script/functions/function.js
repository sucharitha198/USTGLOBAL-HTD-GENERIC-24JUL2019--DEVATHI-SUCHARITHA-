function sum(num1,num2){
if (num1!=undefined && num2!=undefined){
    sumvalue=num1+num2;
    console.log('sum = '+sumvalue);
}else{
    console.log('Enter two values');
}
}
sum(10,3009);
sum(10);
console.log('----return in method---')
sum(10,3009);
    console.log(value);
    sum(10);
    console.log(value);
    
    function sum(num1,num2){
    if (num1!=undefined && num2!=undefined){
        value=num1+num2;
        return value;
    }else{
        console.log('Enter two values');
    }
    }
    
console.log('----Anonymous function ---');

var addData=function(num1,num2){
        value=num1+num2;
        return value;
    };
    var addValue = addData(10,80);
    console.log(value);

    console.log('---self invoked function---');

    (function (num1,num2){
        var sumD = num1+num2;
        console.log('sum = '+sumD);
    }(20,78));
  console.log('-----Fat arrow functions-----');
  
  var sum=(num1,num2)=>{
      var totalsum = num1+num2;
      return totalsum;
  }
  var valueData=sum(210,90);
  console.log('value = '+valueData);
  console.log('===========================');
  var sumvalue=(num1,num2)=>num1+num2;
   var sumvalue=sumvalue(10,49)
  console.log('sum = '+sumvalue);
