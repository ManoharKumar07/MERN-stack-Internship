const express = require('express')
const { View, Delete, Update, Register, Login ,AddFood, DeleteFood, ViewFood, UpdateFood} = require('../Controller/Admin_controller')
const routes = express.Router()
const {body} = require('express-validator')
const Auth = require('../middleware/Auth')



routes.post('/register',[
    body('name', "name must be more than 3 character").isLength({min:3}),
    body('phone', "Phone no must be max of 10 charactor").isLength({min:10, max:10}),
    body('email', "name must be more than 5 character").isEmail(),
    body('password', "Password must be more than 5 character").isLength({min: 5}),
    body('address', "name must be more than 5 character").isLength({min:3}),
], Register)


//Food Menu API
routes.post("/addfood",AddFood)
routes.delete("/deletefood/:id",DeleteFood)
routes.get("/viewfood",ViewFood)
routes.get("/viewfood/:id",ViewFood)
routes.put("/updatefood/:id",UpdateFood)



routes.post('/login', Login)

routes.get("/view",Auth, View)

routes.get("/view/:id",Auth, View)

routes.delete('/delete/:id',Auth, Delete)

routes.put('/update/:id',Auth, Update)

module.exports = routes