function print(cons:Function){
    console.log(cons);
}
@print
class Sample{
    constructor(){
        console.log('This is a sample class decorator');
    }
}