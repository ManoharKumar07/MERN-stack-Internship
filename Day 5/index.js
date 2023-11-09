const express = require('express')
// after installing dotenv
const env =require('dotenv')
env.config()

console.log("kkk")

const app = express();


// to view this goto browser type localhost:700/Arjun
// while starting server give nodemon index.js not node

// To test api click on thunder client extension give locahost..url and you will get output
app.get("/Arjun",(req,res)=>{
    console.log("This is arjun api");
    res.send("This is arjun api res.send")
})


// first one is path for url and second one is path
app.use("/open/image",express.static('./image/home.html')) //api//


app.listen(process.env.PORT,()=>{
console.log("App Listening on port:",process.env.PORT)
})

//to create routes goto routes

//creating api 
// we have write it here but more there then we can transfer it to admin router

app.use("/api/admin",require('./Routes/admin_routes'))
 //common paths keep it here and next to the common path can be transfered to route

 //this has same path so it is shifted to routes
// app.get("/api/admin/phone",(req,res)=>{
//     res.send("My name is phone")
// })
// app.get("/api/admin/address",(req,res)=>{
//     res.send("Mangalore")
// })

// employee routing
app.use("/api/employee",require('./Routes/employee_route'))