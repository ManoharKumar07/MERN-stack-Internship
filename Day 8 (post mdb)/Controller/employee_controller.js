const express = require("express")
const EmployeeSchemma = require("../Models/Employee")

const Name =(req,res)=>{
    res.send("employeenameroute")
};

const Phone =(req,res)=>{
    res.send("My name is phone")
};

const Insert = async (req, res) => {
    try {
      const { name, phone, password, dob,address } = req.body;
  
      const check = await EmployeeSchemma.findOne({ name });
  
      if (check) {
        return res.json({ success: false, message: "Email already exists" });
      } else {
        const data = await new EmployeeSchemma({
          name,
          phone,
          dob,
          password,
          address
        });
  
        await data.save();
        return res.json({ message: "Inserted Successfull", data });
      }
    } catch (err) {
      console.log("catch error " + err.message);
      res.status(500).send("Internal Sever Error!!!");
    }
  };
  
  const View = async (req, res) => {
    try {
      const data = await EmployeeSchemma.find();
      res.json({ success: true, data });
    } catch (err) {
      console.log("catch error " + err.message);
      res.status(500).send("Internal Sever Error!!!");
    }
  };
// for dynamic route may be
  // const View = async (req, res) => {
  //   try {
  //     let id = req.params.id;
  //     if(id){

  //       const data = await EmployeeSchemma.find();
  //       res.json({ success: true, data });
  //     }
  //     else{
  //   } catch (err) {
  //     console.log("catch error " + err.message);
  //     res.status(500).send("Internal Sever Error!!!");
  //   }
  // };

  
  module.exports = { Name, Phone, Insert, View };
  