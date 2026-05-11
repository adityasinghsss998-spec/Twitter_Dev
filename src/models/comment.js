import mongoose from "mongoose";
import { comment } from "postcss";
const CommentSchema=new mongoose.Schema({
  content:{
  type:String,
  required:true,
  },
  userId:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'User',
       required:true
  },
  OnModel:{
    type:String,
    required:true,
    enum:['Tweet','Comment']
  },
  commentable:{
       type:mongoose.Schema.Types.ObjectId,
       required:true,
       refPath:'OnModel'
  }
  
},{timestamps:true})

 const Comment=mongoose.model('Comment',CommentSchema);
 export default Comment;
