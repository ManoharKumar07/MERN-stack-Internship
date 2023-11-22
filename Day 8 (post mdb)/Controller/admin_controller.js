const express = require("express");
const AdminSchemma = require("../Models/Admin");

const Name = (req, res) => {
  res.send("manroute");
};

const Phone = (req, res) => {
  res.send("My name is phone");
};

const Insert = async (req, res) => {
  try {
    const { name, phone, address, email } = req.body;

    const check = await AdminSchemma.findOne({ email });

    if (check) {
      return res.json({ success: false, message: "Email already exists" });
    } else {
      const data = await new AdminSchemma({
        name,
        email,
        phone,
        address,
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
    const data = await AdminSchemma.find();
    res.json({ success: true, data });
  } catch (err) {
    console.log("catch error " + err.message);
    res.status(500).send("Internal Sever Error!!!");
  }
};

const Delete = async (req, res) => {
  try {
    // getting id from url parameter
    const id = req.params.id;
    //if we write body instead params it accesses body if header i acesses the header
    // to check whether data is there ior not use find
    const data = await AdminSchemma.findById(id); // for findbyid no need to pass flower bracket inside the method for other it is needed

    if (!data) {
      return res.json({ success: false, message: "not found" });

      // Note: It is important to write return while using if else condition
    } else {
      // console.log(id);
      // res.send(id)
      const DeletedData = await AdminSchemma.findByIdAndDelete(id);
      return res.json({ success: true, DeletedData: DeletedData });
    }
  } catch (err) {
    console.log("error  " + err.message);
    res.status(500).send("Internal server error");
  }
};

// For Update
// we writw data in the body of postman
const Update = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await AdminSchemma.findById(id);
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
      const UpdatedData = await AdminSchemma.findByIdAndUpdate(
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
module.exports = { Name, Phone, Insert, View, Delete, Update };
