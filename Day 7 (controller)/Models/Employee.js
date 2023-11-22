// This ia schemma for Employee

const mongoose = require("mongoose")
const {Schemma} = mongoose.Schemma;

const EmployeeSchemma =new Schemma({
    name: {
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    dob:{
        type:Date,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },

});

module.exports = mongoose.model("employee", EmployeeSchemma);







