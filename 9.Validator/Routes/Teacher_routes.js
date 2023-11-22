const express = require("express");
const {
  Register,
  View,
  Update,
  Delete,
  Login,
} = require("../Controller/Teacher_Controller");
// After installing npm install express-validator  import it herre
const { body, validationResult } = require("express-validator");
const routes = express.Router();
const Auth = require("../Middleware/Auth");

// After importing validator use
routes.get(
  "/register",
  [
    body("name", "name must be more than 3 character").isLength({ min: 3 }),
    body("phone", "phone mus be more than 1o characters").isLength({
      min: 10,
      max: 10,
    }),
    body("password", "enter valid password").isLength({ min: 5 }),
    body("email", "email must be mire than 5 character").isLength({ min: 5 }),
    body("address", "enter valid address").isLength({ min: 5 }),
  ],
  Register
);
// after this save this and go to teacher controller and import there
routes.get("/view", Auth, View); //Auth called here
routes.get("/view/:id", Auth, View);
routes.get("/delete/:id", Auth, Delete);
routes.put("/update/:id", Auth, Update);

// For login
routes.post("/login", Login);

module.exports = routes;
