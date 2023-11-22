const express = require("express");
const TeacherSchemma = require("../Models/Teacher_Schema");



const Register = async (req, res) => {
    try {
      const { name, phone, address, email } = req.body;
  
  
        const data = await new TeacherSchemma({
          name,
          email,
          phone,
          address,
        });
  
        await data.save();
        return res.json({ message: "Inserted Successfull", data });
      
    } catch (err) {
      console.log("catch error " + err.message);
      res.status(500).send("Internal Sever Error!!!");
    }
  };
  // const View = async (req, res) => {
  //   try {
  //     const data = await TeacherSchemma.find();
  //     res.json({ success: true, data });
  //   } catch (err) {
  //     console.log("catch error " + err.message);
  //     res.status(500).send("Internal Sever Error!!!");
  //   }
  // };
  const View = async (req, res) => {
    try {
    const id = req.params.id
x
    if(id){
      const data = await TeacherSchemma.findById(id)
      res.json({})
    }
    } catch (err) {
      console.log("catch error " + err.message);
      res.status(500).send("Internal Sever Error!!!");
    }
  };

  const Delete = async (req, res) => {
    try {
     
      const id = req.params.id;
  
      const data = await TeacherSchemma.findById(id); // for findbyid no need to pass flower bracket inside the method for other it is needed
  
      if (!data) {
        return res.json({ success: false, message: "not found" });
  
        // Note: It is important to write return while using if else condition
      } else {
        
        const DeletedData = await TeacherSchemma.findByIdAndDelete(id);
        return res.json({ success: true, DeletedData: DeletedData });
      }
    } catch (err) {
      console.log("error  " + err.message);
      res.status(500).send("Internal server error");
    }
  };
  const Update = async (req, res) => {
    try {
      const id = req.params.id;
      const data = await TeacherSchemma.findById(id);
      if (!data) {
        return res.json({
          success: false,
          messsage: "not found",
        });
      } else {
        const { name, phone, email, address } = req.body; //******note: with the same schema you have to data in the body************
        //  ***note take newData as let as it is updating
        let newData = {};
        if (name) {
          newData.name = name;  // newData={name:"rahul"}
        }
        if (phone) {
          newData.phone = phone;
        }
        if (email) {
          newData.email = email;
        }
        if (address) {
          newData.address = address;
        }
        // updating
        const UpdatedData = await TeacherSchemma.findByIdAndUpdate(
          id,
          { $set: newData },
          { new: true }
        );
        // the Dollar set is used to update the previous data
        return res.json({ success: true, UpdatedData: UpdatedData });
      }
    } catch (err) {
      console.log("Error" + err.message);
      res.status(500).send("Inetrnal server");
    }
  };
  module.exports ={Register,View,Delete,Update} ;