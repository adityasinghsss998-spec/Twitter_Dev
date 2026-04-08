
const Tweet=require('../models/tweet')
class Tweetrepository{
  async create(data){
    try{
      const tweet=await Tweet.create(data);
      return tweet;
    }catch(e){
      console.log("somrhting went wrong on the repository layer")
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
  async update(id,data){
    try{
      const tweet=await Tweet.findByIdAndUpdate(id,data,{new:true});
      return tweet;
    }catch(e){
      console.log("somrhting went wrong on the repository layer")
    }
  }
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
      const tweet=await Tweet.findById(id).populate('comments')
      return tweet;
    }catch(e){
      console.log("somrhting went wrong on the repository layer")
    }
  }
}
module.exports=Tweetrepository