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

module.exports = { Name, Phone, Insert, View };
