import TweetService from "../services/tweetservice.js";
const tweetservice=new TweetService();
import upload from '../config/flie-upload-s3-config.js'
const singleuploader=upload.single('image');
export const create=async(req,res)=>{
   try{
    singleuploader(req,res,async function(err,data){
       if(err){
        return res.status(500).json({error:err});
       }
       console.log('image url is',req.file);
       const response=await tweetservice.create(req.body);
      return res.status(201).json({
      success:true,
      data:response,
      message:"Sucessfully created a tweet",
      err:{}
     })
    })
     
   }catch(e){
      return res.status(201).json({
         success:false,
         data:{},
         message:"Something went wrong in creating the tweet",
         err:e
     })
   }
}
export const getTweet=async(req,res)=>{

    try{
     const response=await tweetservice.gettweet(req.params.id);
     return res.status(201).json({
      success: true,
      data:response,
      err:{},
      message:"Successfully got the tweet"
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
