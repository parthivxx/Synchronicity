const {User} = require("../model/user.model.js");
async function loginHandler(req,res){
    const {email,password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user || user.password !== password){
            res.status(401).json({msg:"Unauthorised"});
        }else{
            res.status(200).json({msg:"succesfull login"});
        }
    }catch(err){
        res.status(500).json({msg:err.msg});
    }
}

module.exports = {loginHandler};