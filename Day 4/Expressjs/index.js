const express = require('express')
// after installing dotenv
const env =require('dotenv')
env.config()

console.log("kkk")

const app = express();

app.listen(process.env.PORT,()=>{
console.log("App Listening on port:",process.env.PORT)
})

// to view this goto browser type localhost:700/Arjun
// while starting server give nodemon index.js not node

// To test api click on thunder client extension give locahost..url and you will get output
app.get("/Arjun",(req,res)=>{
console.log("This is arjun api");
res.send("This is arjun api res.send")
})