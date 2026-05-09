import mongoose from 'mongoose';
const likeschema=new mongoose.Schema({
  Onmodel:{
    type:String,
    required:true,
    enum:['Tweet','Comment']
  },
  likeable: {
   type:mongoose.Schema.Types.ObjectId,
   required:true,
   refPath:'Onmodel'
  } ,
  user:{
   type:mongoose.Schema.Types.ObjectId,
   ref:'User',
   required:true
  }
},{timestamps:true})
const Like=mongoose.model('Like',likeschema);
export default Like;