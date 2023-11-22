const express = require('express')
// after installing dotenv
const env =require('dotenv')
env.config()

//to connect db import it here
const connectToMongo =require('./db')
connectToMongo()



const app = express();
app.use(express.json())


// Today definining schemma

app.use("/api/admin",require('./Routes/admin_routes'))


app.listen(process.env.PORT,()=>{
    console.log("App Listenting on Port :"+process.env.PORT)
})