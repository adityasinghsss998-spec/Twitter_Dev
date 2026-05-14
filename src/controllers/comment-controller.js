import {Commentservice} from '../services/index.js'
const commentservice=new Commentservice();
export const createcomment=async(req,res)=>{
   try{
     const response=await commentservice.createComment(req.query.modelid,req.query.modelType,req.body.userid,req.body.content);
     return res.status(200).json({
      success: true,
      data:response,
      err:{},
      message:"Successfully created a comment"
     })
     
   }catch(e){
    console.log(e);
    res.status(500).json({
      success: false,
      data:{},
      err:e,
      message:"something went wrong"
    })
   }
  }
  