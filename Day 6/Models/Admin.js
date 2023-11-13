// this is  schemma for admin
const mongoose = require('mongoose')
const {Schemma}= mongoose.Schema

const AdminSchemma = new Schema({
    name:{
        type:String,
        required:true  //for validation     
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model("admin",AdminSchemma)
//admin parameter is a table name  in database