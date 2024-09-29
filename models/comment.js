const mongoose = require("mongoose");
const commentSchema= new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Post"
    },
    user:{
        type:String,
        required:true
    },
    commentValue:{
        type:String,
        required:true
    },
    createdAt:{
       type : Date,
       default:Date.now()

    },
    updatedAt:{
        type:Date
    }
})

module.exports= mongoose.model("Comment",commentSchema)