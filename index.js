const express = require("express");
const {connectDB} =  require("./config/db.js");
const {router} = require("./router/authRoutes.js");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;

connectDB();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use("/auth",router);

app.get("/",(req,res)=>{
    res.send("Gar");
})
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})
