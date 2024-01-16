const {User} = require("../model/user.model.js");
async function signupHandler(req,res){
    try{
        const {name,age,gender,email,phone,password} = req.body;
        console.log(req);
        const newUser = new User({name,age,gender,email,phone,password});
        await newUser.save();
        res.status(201).json({msg:"successful"});
    }catch(error){
        // console.log(error.msg);
        res.status(500).json({msg : error.msg});
    }
}
module.exports =  {signupHandler};