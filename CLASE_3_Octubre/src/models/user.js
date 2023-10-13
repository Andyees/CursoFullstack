const { default: mongoose } = require("mongoose")
const moongose=require("mongoose")

const schema=mongoose.Schema

const SchemaUser=new schema({
    
    id:{type:Number,required:true},
    Name:{type:String,required:true},
    Apellido:{type:String,required:true},
    Age:{type:Number,required:false},
    Cargo:{type:String,required:true}

})

module.exports=mongoose.model("users",SchemaUser)