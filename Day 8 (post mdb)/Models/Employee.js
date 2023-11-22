// This ia schemma for Employee

const mongoose = require("mongoose");
// const {Schema} = mongoose.Schemma;  while using controller it is changed
const {Schema} = mongoose;

const EmployeeSchema =new Schema({
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
        required:false,
    },
    address:{
        type:String,
        required:true
    },

});

module.exports = mongoose.model("employee", EmployeeSchema);







