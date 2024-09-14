const express = require("express")
const  router  = express.Router();

// import controllesrs
const {signIn,logIn} = require("../controllers/auth")

// define route
router.post("/signin",signIn);
router.post("/login",logIn);

module.exports =router;