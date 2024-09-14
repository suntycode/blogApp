const mongoose   = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
       
        trim:true
    },
    lastName:{
        type:String,
       
        trim:true
    },
    bio:{
        type:String,
       
    },
    contactNo:{
     type:Number
    },
    userName:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    ,
    createdAt:{
        type:Date,
        default:Date.now(),
      
    },
    updatedAt:{
        type:Date,
    },
    role:{
        type:String,
        enum:["Admin","User"],
        required:true
    },
    emialVerified:{
        type:Boolean,
        
    }
})

module.exports = mongoose.model("User",userSchema);