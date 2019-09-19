for(i=0 ; i<5; i++)
{
    console.log(i);
}
  console.log(i);

  for( let j=0;j<5;j++){
      console.log(j);
  }
  //console.log(j);

var hobbies=['dancing','singing','cricket'];
console.log('Hobbies  '+hobbies);
var hobbies=['numismatics','jumping'];
console.log('redeclaration in var  '+ hobbies);
hobbies[2]='sing';
console.log(hobbies);

let fruits=['apple','banana'];
console.log(fruits);
//let fruits=['jackfruit'];
//console.log(fruits);  redeclaration isn't possible
fruits=['jackfruit'];
console.log(fruits); //reinitialisation is possible

const games=['kabbadi','coco','cricket'];
/*console.log(games);
const games=['shuttle'];
console.log(games);
games=['shuttle'];
console.log(games);  redeclaration and reinitializtion is not possible*/

