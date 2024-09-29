const mongoose =  require("mongoose")
const otpSchema =  new mongoose.Schema({
    otpCode:{
        type:Number,
        require:true
    },
    genrateAt:{
        type:Date,
        default:Date.now(),
        expires:60
    },
    email:{
        type:String,
        required:true,

    }
})

module.exports =  mongoose.model("Otp",otpSchema);