
const express = require('express')

const routes = express.Router()

routes.get("/name",(req,res)=>{
    res.send("manroute")
})

routes.get("/phone",(req,res)=>{
         res.send("My name is phone")
     })


module.exports=routes