import User from '../models/User.js'
import { Userrepository } from '../reposiory/index.js'
class Userservice{
  constructor(){
      this.Userrepo=new Userrepository();
  }
  async signup(data){
    const response=await this.Userrepo.create(data);
    return response;
  }
  async getuserbyemail(email){
    try{
     const user=await this.Userrepo.findBy({email});
     return user;
    }catch(e){
       throw e;
    }
  }
  async authenticate(email,password){
    try{
      const user=await this.Userrepo.findBy({email});
    if(!user){
      throw({
        message:"no user found",
        success:false
      })
    }
    if(!user.comparepassword(password)){
      throw ({
        message:"INcorrect password",
        success:false
      })
    }
    const token=user.genJwt();
    console.log(token)
    return token;
    }catch(e){
      console.log("something went wrong at the service layer")
        throw e;
    }
  }

}
export default Userservice;