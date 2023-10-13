const express=require("express")
const router=express.Router()
const funciones=require('../Functions/functions')
const users=require("../models/user")

// Endpoints no Database
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
  const ListUser=await users.find()
  res.render("users",{Usuarios:ListUser})

})


router.get("/main/addUser",(req,res)=>{

  res.render("addUser")
  
})

router.get("/main/DeleteUser",(req,res)=>{

  res.render("DeleteUser")
  
  })


// router.post("/main/addUser",async(req,res)=>{

//  // Leer datos Data.json 
// let usuarios= await funciones.read('Functions/data.json')
// //Ingresar usuario al Arreglo 
// await usuarios.push(req.body)

// //Escribir en el archivo Data.json
// let StateWriter=await funciones.write(usuarios,"Functions/data.json")

// //Validacion de la escritura
//   if(StateWriter){
//     console.log("El cliente fue agregado exitosamente")
//     res.redirect("/main")
//   }
//   else
//     res.sendStatus(403)

// })

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

// Endpoints DATABASE
router.post("/main/addUser",(req,res)=>{

    const userDif={"id":req.body.id,"Name":req.body.name}
    const usuario= new users(req.body)
    console.log(usuario)
    usuario.save().then((data)=>{
    console.log("el usuario fue creado exitosamente en la BD")
    res.redirect("/main")

  }).catch((err)=>{console.error(err);res.send({"status":"el usuario no pudo ser creado"})})

 
 })
 
 router.post("/main/DeleteUser",(req,res)=>{
 
   
 
   
 })




module.exports=router
