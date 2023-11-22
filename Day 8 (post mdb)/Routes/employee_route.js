const express = require("express")
const { Name, Phone, Insert, View } = require("../Controller/employee_controller");

const routes = express.Router();

routes.get("/name", Name);

routes.get("/phone", Phone);

routes.post("/insert", Insert);

routes.get("/view", View);
module.exports = routes;