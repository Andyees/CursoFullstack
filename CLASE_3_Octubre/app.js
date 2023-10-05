const math = require("./math")
const colors=require("colors")
const express=require("express")
const router=express.Router()

const app=express()

app.listen(3000,()=>{
    console.log("el servidor se esta ejecutando en el puerto 3000" .green)
})

app.use(express.urlencoded({extended:false}))
app.use(express.json())




app.get("/suma",(req,res)=>{

console.log(req.body) 
let suma= req.body.numero1+req.body.numero2
if(Number(suma))
    
res.send({Suma:req.body.numero1+req.body.numero2})

    
})
app.get("/add/:numero1/:numero2",(req,res)=>{

    console.log(req.params) 
    
        
    res.send({Suma:req.params.numero1+req.params.numero2})
        
    })


console.log("El resultado es " .brightMagenta)