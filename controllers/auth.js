const User = require("../models/user")
const bcrypt = require("bcrypt");
const jwt  =  require("jsonwebtoken")

exports.signIn  = async(req,res)=>{
    try {
        const {userName,email,password,role} =req.body
        if(!userName){
          return  res.status(500).json({
                success:false,
                message:"userName is required"
            })
        }
        if(!email){
        return    res.status(500).json({
                success:false,
                message:"email is required"
            })
        }
        if(!password){
         return   res.status(500).json({
                success:false,
                message:"password is required"
            })
        }
        if(!role){
         return   res.status(500).json({
                success:false,
                message:"role is required"
            })
        }

        // check user is already exist or not 

        const isExist  =  await User.findOne({email});
        if(isExist){
          return  res.status(400).json({
                success:false,
                message:"user is already exist"
            }) 
        }

        // password hash 

        let hashPassword ;
        try {
            hashPassword = await bcrypt.hash(password,10);
        } catch (error) {
          return  res.status(400).json({
                success:false,
                message:"something wrong in password"
            }) 
        }

        // create user 

        const user  =  await User.create({
            userName,password:hashPassword,role,email

        })

        return res.status(200).json({
             success:true,
                message:"user created successfully",
                "user":user
        })



    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"user not created try again"
        }) 
    }
}

exports.logIn = async(req,res)=>{
    try {
          
        const {email,password}= req.body;
        // validation
        if(!email){
            return    res.status(500).json({
                    success:false,
                    message:"email is required"
                })
            }
            if(!password){
             return   res.status(500).json({
                    success:false,
                    message:"password is required"
                })
            }
        // check user exist or not 
         
        const user  = await User.findOne({email});

        if(!user){
            return   res.status(500).json({
                success:false,
                message:"this user not associate with us "
            })
        }
        
        let userData={
            role:user.role,
            email:user.email,
            id:user._id
        }
        // password verify 
        if(await bcrypt.compare(password,user.password)){
            let token  = await  jwt.sign(userData,process.env.JWT_SCERET)
            return res.status(200).json({
                success:true,
                message:"user login successfully ",
                body:{
                    "token":token,
                    "user": user
                }
               
            })

        }else{
            return    res.status(500).json({
                success:false,
                message:"password does not match "
            })
        }

       



    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"login failed try again"
        })  
    }
}