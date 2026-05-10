import Like from "../models/like.js";
import Crudrepository from "./crudrepository.js";
class Likerepository extends Crudrepository { 
  constructor(){
    super(Like);
  }
  async findByUserAndLikable(data){
    try{
      const like=await Like.findOne(data);
      return like;
    }catch(e){
      throw e;
    }
  }
}
export default Likerepository