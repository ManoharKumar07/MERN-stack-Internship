const express = require("express");
const { Name, Phone, Insert, View ,Delete, Update} = require("../Controller/admin_controller");

const routes = express.Router();

routes.get("/name", Name);

routes.get("/phone", Phone);

routes.post("/insert", Insert);

routes.get("/view", View);

// to delete now it is in get for example
routes.get("/delete/:id",Delete);

// for updating data it is same as delete through id 
routes.put('/update/:id' , Update)

module.exports = routes;
