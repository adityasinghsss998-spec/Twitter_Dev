import {Likeservice} from '../services/index.js'
const likeservice =new Likeservice();
export const toggleLike=async(req,res)=>{
   try{
     const response=likeservice.togglelink(req.query.modelid,req.query.modelType,req.body.userid);
     return res.status(200).json({
      success: true,
      data:response,
      err:{},
      message:"Successfullt toggles the like"
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