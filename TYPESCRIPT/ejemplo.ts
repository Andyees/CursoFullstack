let x:number;
let y:string | number;
var array:Array<string>
var array2:Array<any>;
array=["hola","mundo"]
array2=[1,"hola"]


function suma(number1:number,number2:number):string{


    let number:number=number1+number2
    let cadena:string=""+number
    return cadena
}

interface usuario{
 nombre:string
 edad:number
 cedula:number
}

var juan:usuario={
    nombre:"Juanes",
    edad:21,
    cedula:982332
}

function imprimir(...args:string[]){

    for (let index = 0; index < args.length; index++) {
        console.log(args[index])
    }



}

var array3:string[]=["hola","mundo","con","typescript"]
var array4:string[]=["herencia","objetos","condionales","javascript"]


imprimir(...array3,...array4)





