
import Tweet from "../models/tweet.js";
import Crudrepository from "./crudrepository.js";
class Tweetrepository extends Crudrepository{
  constructor(){
    super(Tweet);
  }
  async create(data){
    try{
      const tweet=await Tweet.create(data);
      return tweet;
    }catch(e){
      console.log("somehting went wrong on the repository layer");
      console.log(e);
      throw e;
    }
  }
 
  // async update(id,data){
  //   try{
  //     const tweet=await Tweet.findByIdAndUpdate(id,data,{new:true});
  //     return tweet;
  //   }catch(e){
  //     console.log("somrhting went wrong on the repository layer")
  //   }
  // }
  
  async getwithcomments(id){
     try{
      const tweet=await Tweet.findById(id).populate({path:'comments'}).lean();
      return tweet;
    }catch(e){
      console.log("somrhting went wrong on the repository layer")
    }
  }
  async getAll(offset,limit){
    try{
      const tweet=await Tweet.find().skip(offset).limit(limit);
      return tweet;
    } catch(e){
      console.log("somrhting went wrong on the repository layer")
    }
  }
  async find(id){
   const tweet=await Tweet.findById(id).populate({path:'likes'});
   return tweet;
  }
}
export default Tweetrepository;