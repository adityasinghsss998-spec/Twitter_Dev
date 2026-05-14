import User from "../models/User.js";
import Crudrepository from "./crudrepository.js";
class Userrepository extends Crudrepository { 
  constructor(){
    super(User);
  }
  async findBy(data){
    try{
    const response = User.findOne(data);
    return response;
    }catch(e){
      throw e;
      console.log("something went wrong at the repository layer")
    }
  }
}
export default Userrepository