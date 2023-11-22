

const express = require('express')

const routes = express.Router()

routes.post("/name",(req,res)=>{
    res.send("employeenameroute")
})

routes.get("/phone",(req,res)=>{
         res.send("My name is phone")
     })


module.exports=routes