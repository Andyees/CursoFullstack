const express=require("express")
const router=express.Router()
const funciones=require('../Functions/functions')

router.get("/suma",(req,res)=>{

    console.log(req.body) 
    let suma= req.body.numero1+req.body.numero2
    if(Number(suma))
        
    res.send({Suma:req.body.numero1+req.body.numero2})
    
        
    })
router.get("/add/:numero1/:numero2",(req,res)=>{
    
        console.log(req.params) 
        
            
        res.send({Suma:req.params.numero1+req.params.numero2})
            
        })

router.get("/SendFilesHTML",(req,res)=>{

res.sendFile("./index.html",{ root: __dirname })

})

router.get("/main",async(req,res)=>{
  let usuarios= await funciones.read('Functions/data.json')
  res.render("users",{Usuarios:usuarios})

})


router.get("/main/addUser",(req,res)=>{

  res.render("addUser")
  
})
router.post("/main/addUser",async(req,res)=>{

 // Leer datos Data.json 
let usuarios= await funciones.read('Functions/data.json')
//Ingresar usuario al Arreglo 
await usuarios.push(req.body)

//Escribir en el archivo Data.json
let StateWriter=await funciones.write(usuarios,"Functions/data.json")

//Validacion de la escritura
  if(StateWriter){
    console.log("El cliente fue agregado exitosamente")
    res.redirect("/main")
  }
  else
    res.sendStatus(403)

})

router.get("/main/DeleteUser",(req,res)=>{

res.render("DeleteUser")

})

router.post("/main/DeleteUser",async(req,res)=>{

  // Leer datos Data.json 
 let usuarios= await funciones.read('Functions/data.json')
 //Eliminar usuario al Arreglo 
let IdEliminar=req.body.id

const existe= usuarios.some(usuario=> usuario.id==IdEliminar)
console.log(existe)
if (existe) {
  let Newusuarios= await usuarios.filter(usuario=>usuario.id!=IdEliminar)

 
  //Escribir en el archivo Data.json
  let StateWriter=await funciones.write(Newusuarios,"Functions/data.json")
  
  //Validacion de la escritura
    if(StateWriter){
      console.log("El cliente fue Eliminado exitosamente")
      res.redirect("/main")
    }
    else{
      res.sendStatus(403)
  
  }

} else {

res.render("DeleteUser_DontExist")

  
}})




module.exports=router
