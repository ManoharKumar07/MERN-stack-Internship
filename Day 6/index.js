const express = require('express')
// after installing dotenv
const env =require('dotenv')
env.config()

//to connect db import it here
const connectToMongo =require('./db')
connectToMongo()



const app = express();


