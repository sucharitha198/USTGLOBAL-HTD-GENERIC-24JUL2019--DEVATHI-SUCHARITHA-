let employyeJSON = {
                    name:'raj',
                    age : 20,
                    hobbies : ['dancing', 'singing']
}
console.log('My Name is : '+ employyeJSON.name);
console.log(`My Name is ${employyeJSON.name}`); //string interpolation
console.log(employyeJSON);

let jsonObject = JSON.stringify(employyeJSON);
console.log(jsonObject);

let jsObject= JSON.parse(jsonObject);
console.log(jsObject);
