import mongoose from "mongoose";
import { comment } from "postcss";
const CommentSchema=new mongoose.Schema({
  content:{
  type:String,
  required:true,
  },
  userEmail:{
    type:String
  },
  
},{timestamps:true})

 const Comment=mongoose.model('Comment',CommentSchema);
 export default Comment;
