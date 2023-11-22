const express = require("express");
const TeacherSchemma = require("../Models/Teacher_Schema");
const { body, validationResult } = require("express-validator"); //imported
const env = require("dotenv");
env.config();
const jwt = require("jsonwebtoken");

// password encryption
const bcrypt = require("bcryptjs");
// after this goto else part create one variable salt

const Register = async (req, res) => {
  try {
    const { name, phone, password, address, email } = req.body;

    //after importing validator write this
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const success = false;
      return res.status(400).json({ success, errors: errors.array() });
    }
    const check = await TeacherSchemma.findOne({ email });
    if (check) {
      return res.json({ message: "email exist" });
    } else {
      const salt = await bcrypt.genSalt(10);
      // it will generate random hashed number and the number 10 can be any number tells  the number of times it hashed
      const secPass = await bcrypt.hash(password, salt);
      // now the secured password will be in secPass so pass it to the password of the new schemma
      const data = await new TeacherSchemma({
        name,
        email,
        phone,
        password: secPass, //here secpass assigned to pass
        address,
      });

      await data.save();
      return res.json({ message: "Inserted Successfull", data });
    }
  } catch (err) {
    console.log("catch error " + err.message);
    res.status(500).send(" controller Internal Sever Error!!!");
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
    const id = req.params.id;

    if (id) {
      const data = await TeacherSchemma.findById(id);
      return res.json({ data: data });
    } else {
      const data = await TeacherSchemma.find();
      res.json({ success: true, data });
    }
  } catch (err) {
    console.log("catch error " + err.message);
    return res.status(500).send("Internal Sever Error!!!");
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
        newData.name = name; // newData={name:"rahul"}
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

// For login
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // for login we require may only email and password
    const check = await TeacherSchemma.findOne({ email });
    if (!check) {
      return req.json({ message: "Invalid email id" });
    } else {
      const passwordCompare = await bcrypt.compare(password, check.password);
      if (!passwordCompare) {
        const success = false;
        return res
          .status(400)
          .json({ success, error: " password compare incorrect" });
      } else {
        // the data leak through browser controlled by creating middleware
        let data = check.id; //contains auto generated id
        // after this in env a key is typed and imported above
        // after that json web token is taken above after that below token variable
        let token = jwt.sign(data, process.env.KEY); //this the token
        return res.json({ success: true, message: "login successful", token });

        //after this create one folder called middleware
      }
    }
  } catch (error) {
    console.log("catch error" + error.message);
    res.status(500).send("Internal server log error");
  }
};

module.exports = { Register, View, Delete, Update, Login };
