const express = require("express");
const {signupHandler} =  require("../controller/signupController.js");
const {loginHandler} = require("../controller/loginController.js")
const router = express.Router();

router.post("/signup",signupHandler);

router.post("/login",loginHandler);

module.exports = {router};