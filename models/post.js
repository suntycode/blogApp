const mongoose = require("mongoose");
const Comment = require("./comment");
const Like = require("./like");
const Tag = require("./tag");
const Category = require("./category");
const category = require("./category");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  thumbnail:{
    type:String,
    required: true,

  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: {
    type: Date,
  },
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],

  like: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Like",
    },
  ],

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  tag: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],





});


module.exports = mongoose.model("Post",postSchema)
