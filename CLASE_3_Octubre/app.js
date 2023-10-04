const math = require("./math")
const colors=require("colors")
const express=require("express")
const router=express.Router()

const app=express()

app.listen(3000,()=>{
    console.log("el servidor se esta ejecutando en el puerto 3000" .green)
})


app.get("/suma",(req,res)=>{

    
res.send({name:"apliaccion web"})
    
})


console.log("El resultado es " .brightMagenta)