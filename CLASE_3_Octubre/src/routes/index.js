const express=require("express")
const router=express.Router()


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

module.exports=router
