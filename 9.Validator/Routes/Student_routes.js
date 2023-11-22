const express = require("express");
const { Insert } = require("../Controller/Student_Controller");
// After installing npm install express-validator  import it herre

const routes = express.Router();
const Auth = require("../Middleware/Auth");

routes.post("/insert", Insert);

module.exports = routes;
