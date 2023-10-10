const os = require("os")
const fs= require("fs")
const { Module } = require("module")
const funciones={}



async function leerdatos(ruta) {
    let data
    data= await fs.readFileSync(ruta)
    data= await JSON.parse(data)
    
   return data
}

async function EscribirDatos(data,ruta){

    let texto=JSON.stringify(data)
    let Estado_Escritura=await fs.writeFileSync(ruta,texto)
    console.log(Estado_Escritura)


}

async function ejemplo(ruta){
let datos= await leerdatos(ruta) 
console.log("Datos leidos: "+datos)
datos.push({"id":15,"Name":"David","Apellido":"Marquez","Age":23,"Cargo":"Jefe de operaciones"})
await EscribirDatos(datos,ruta)
}
funciones.read=leerdatos
funciones.write=EscribirDatos



module.exports=funciones






