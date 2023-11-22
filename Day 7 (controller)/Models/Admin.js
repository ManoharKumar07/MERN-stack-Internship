// this is  schemma for admin
const mongoose = require("mongoose");
const { Schema } = mongoose;

const AdminSchemma = new Schema({
  name: {
    type: String,
    required: true, //for validation
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  address: {
    type: String,
    required: false,
  },
  date:{
    type:Date,
    default:Date.now
  }
});

module.exports = mongoose.model("admin", AdminSchemma);
//admin parameter is a table name  in database
