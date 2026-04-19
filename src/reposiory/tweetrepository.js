
import Tweet from "../models/tweet.js";
class Tweetrepository{
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
  async get(id){
    try{
      const tweet=await Tweet.findById(id);
      return tweet;
    }catch(e){
      console.log("somrhting went wrong on the repository layer")
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
  async destroy(id){
    try{
      const tweet=await Tweet.findByIdAndDelete(id);
      return tweet;
    }catch(e){
      console.log("somrhting went wrong on the repository layer")
    }
  }
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
}
export default Tweetrepository;