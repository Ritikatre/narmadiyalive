const mongoose = require('mongoose');

// "mongodb://localhost:27017/" <- Connection String available at mongo Compass
const mongoUrI = "mongodb://localhost:27017/nduser" // nduser is database name 
 
const connectToMongo = ()=>{

    mongoose.connect(mongoUrI, ()=> {

        console.log("Connected To Mongo Successfully!");
    })
}
module.exports =  connectToMongo; 