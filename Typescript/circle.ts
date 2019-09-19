namespace MathOperations{
    const PI = 3.14;
    export function cir(r:number){
        console.log(2*PI*r);
    }
    export function area(r:number){
        console.log(PI*r*r);
    }
}
MathOperations.cir(5);