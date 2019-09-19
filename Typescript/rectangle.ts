namespace MathOperations{
    export namespace rectangle{
        export function area(length:number,breadth:number){
            console.log('Area of the rectangle '+length*breadth);
        }
    }
    export namespace rect{
        export function perimeter( length:number,breadth:number){
            console.log('perimeter of the rectangle '+2*(length+breadth))
        }
    }
}
MathOperations.rect.perimeter(2,3);