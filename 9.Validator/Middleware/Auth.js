var jwt = require("jsonwebtoken");
const env = require("dotenv");
env.config;
JWT_SECRET = process.env.KEY;

const Auth = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res
      .status(401)
      .send({ error: "please authenicate using a valid token if " });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET); //verifying whether the token is there in database
    req.teacher = data;
    console.log(data, 1211115523323323323262622626);
    next(); // function call which is middleware
  } catch {
    res
      .status(401)
      .send({ error: "catch : please authenicate using a valid token" });
  }
};

module.exports = Auth;
// now goto teacher route and call it there in middle of view
