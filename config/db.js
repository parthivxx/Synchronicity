const mongoose = require("mongoose");

async function connectDB(){
    try{
      const connect =  await mongoose.connect("mongodb+srv://parthiv:NCKLFYonqI57jWow@cluster0.ieihfub.mongodb.net/");
      console.log("MongoDB connected");
    }catch(err){
        console.log(err);
    }
}

module.exports = {connectDB};