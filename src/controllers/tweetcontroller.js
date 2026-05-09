import TweetService from "../services/tweetservice.js";
const tweetservice=new TweetService();
export const create=async(req,res)=>{
   try{
     const response=await tweetservice.create(req.body);
     return res.status(201).json({
      success:true,
      data:response,
      message:"Sucessfully created a tweet",
      err:{}
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