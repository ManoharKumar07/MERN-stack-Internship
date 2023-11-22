const express = require("express")
const {Register,View,Update,Delete}= require("../Controller/Teacher_Controller");
const routes =express.Router();

routes.get("/insert",Register);

routes.get("/view",View)
routes.get("/view/:id",View)
routes.get("/delete/:id",Delete);
routes.put('/update/:id' , Update)

module.exports = routes;