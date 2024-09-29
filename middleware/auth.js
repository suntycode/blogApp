
const jwt  = require("jsonwebtoken")
require("dotenv").config()
exports.auth  = async(req,res,next)=>{
    try {
        const {token } =req.body
        if(!token){
            return res.status(500).json({
                success:false,
                message:"token is required"
            })
        }
        
     try {
        const decode =  jwt.verify(token,process.env.JWT_SCERET);
        console.log(decode);
        req.user = decode;

     } catch (error) {
        return res.status(500).json({
            success:false,
            message:"token is not valid"
        })
     }
    


   next();


    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"some thng went wrong in token"
        }) 
    }
}


exports.isAdmin = async(req,res,next)=>{
    try {
          const {user} = req
          if(user.role!=="Admin"){
            return res.status(500).json({
                success:false,
                message:"this is protected rout for admin"
            }) 
          }


          next();
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"this is protected rout for admin"
        }) 
    }
}