const math = require("../math")
const colors=require("colors")
const express=require("express")
const morgan=require("morgan")
const router=express.Router()
const Routes=require('./routes/routes')


// instanciar app con express
const app=express()

//configuraciones
app.set("puerto",3000)
app.set("view engine","ejs")


// Poner a ejecuta el servidor
app.listen(app.get("puerto"),()=>{
    console.log("el servidor se esta ejecutando en el puerto "+app.get("puerto") )
})
console.log(__dirname.bgRed)


//Middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(morgan("dev"))
app.use(express.static('public'));
app.use('/',Routes)

