// for mongo db copy connection string from the mongo db
const mongoose = require('mongoose')   //after installing package mongoose
const MongoURI ="mongodb://localhost:27017/Teacher"
//crud is the name of the database

// install one package called mongo
// npm install mongoose  used to schemma (structure)  
// storage structure what and all will  be there in a document of the database

// to connect mongodb crete one function

const connectToMongo = async () =>{
    try{
        await mongoose.connect(MongoURI)
        console.log("Connected mongo successfully")
    }
    catch(err){
        console.log("Failed to conect",err)
    }
}


//call the functon to initiate function in index.js


module.exports=connectToMongo
//after this go to index js and import it there
