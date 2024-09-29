const express = require("express")
const  router  = express.Router();

// import controllesrs
const {signIn,logIn} = require("../controllers/auth")
const{auth,isAdmin}= require("../middleware/auth");

// define route
router.post("/signin",signIn);
router.post("/login",logIn);
router.post("/admin",auth,isAdmin,(req,res)=>{
    res.send("admin success full login");
})

module.exports =router;