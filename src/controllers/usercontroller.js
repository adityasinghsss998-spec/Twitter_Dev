import {Userservice} from '../services/index.js'
const userservice=new Userservice();
export const signUp=async (req,res)=>{
  try{
       const response=await userservice.signup({
        email:req.body.email,
        password:req.body.password,
        name:req.body.name
       })
       return res.status(201).json({
        message:"Successfully created a new user",
        success:true,
        data:response,
        err:{},
       })
     } catch(e){
      console.log(e);
       return res.status(500).json({
        message:"Something went wrong ",
        data:{},
        err:e
       })
     }
}
export const login=async (req,res)=>{
  try{
    const user=await userservice.getuserbyemail(req.body.email);
    if(!user){
      return res.status(401).json({
        message:"no user found",
        success:false
      })
    }
    if(!user.comparepassword(req.body.password)){
      return res.status(401).json({
        message:"INcorrect password",
        success:false
      })
    }
    const token=user.genJwt();
    return res.status(200).json({
      success:true,
      message:"Successfully logged in",
      data:token,
      err:{}
    })
  }catch(e){
     console.log(e);
       return res.status(500).json({
        message:"Something went wrong ",
        data:{},
        err:e
       })
  }
}