// console.log('----unions----');
// let unions:number|string;
// unions = 20;
// console.log(unions);

// console.log('tuple');
// let myTuple=['suchi',20,true];
// console.log(myTuple);

// enum clr{
//     ash,
//     milky,
//     cyan,
// } 
// console.log(clr.cyan);

class Building{
    constructor(public Bname:string){

    }
}
class Apartment extends Building{
    constructor( Bname:string ,street:string){
        super(Bname);
    }
}
let build = new Apartment('laksh','bkm');
console.log(build.Bname);