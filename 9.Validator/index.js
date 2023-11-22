const express = require("express");
const env = require("dotenv");
env.config();

const app = express();
app.use(express.json());

//to connect db import it here
const connectToMongo = require("./db");
connectToMongo();

app.use("/api/teacher", require("./Routes/Teacher_routes"));
console.log("hii");

app.listen(5000, () => {
  console.log("App listening on the PORT : ", process.env.PORT);
});

// *** Password encryption
// install package npm i bcryptjs jsonwebtoken and import it in conr=troller

// to secure data viewing from browser go to login in controller
