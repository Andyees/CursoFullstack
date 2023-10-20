var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var x;
var y;
var array;
var array2;
array = ["hola", "mundo"];
array2 = [1, "hola"];
function suma(number1, number2) {
    var number = number1 + number2;
    var cadena = "" + number;
    return cadena;
}
var juan = {
    nombre: "Juanes",
    edad: 21,
    cedula: 982332
};
function imprimir() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var index = 0; index < args.length; index++) {
        console.log(args[index]);
    }
}
var array3 = ["hola", "mundo", "con", "typescript"];
var array4 = ["herencia", "objetos", "condionales", "javascript"];
imprimir.apply(void 0, __spreadArray(__spreadArray([], array3, false), array4, false));
