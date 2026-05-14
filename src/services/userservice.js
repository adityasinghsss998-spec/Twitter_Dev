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

    }
  }

}
export default Userservice;