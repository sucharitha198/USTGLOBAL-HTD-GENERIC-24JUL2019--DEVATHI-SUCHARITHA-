let result = new Promise(function(resolve,reject){
    if(10===10){
     reject('Failed');
    }else{
     resolve('Success');       
    }
});
result.then((data)=>{
    console.log('then Block = '+data);  //resolve comes to then block
}).catch((error)=>{
    console.log('Catch Block = '+error);
});

let employeeData = new Promise(function(resolve,reject){
    const employee = [
        {
            name:'sharukh',
            age:50,
        },
        {
            name:'sundari',
            age:30,
        },
        {
            name:'akshay',
            age:50,
        }
    ]
    if(10>10){

          reject('Failed');
    }else{
       resolve(employee);       
    }
});
employeeData.then((data)=>{
    //console.log('then Block = ',data);  //if we use + it wont show data....use , for the data to displays
    return data;
}).catch((error)=>{
    console.log('Catch Block = '+error);
}).then(function(data1){
    console.log('This is block 2 :',data1);
});