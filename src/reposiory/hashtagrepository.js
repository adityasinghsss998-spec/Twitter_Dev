
const Hashtag=require('../models/hashtags');
class Hashtagrepository{
  async create(data){
    try{
      const hashtag=await Hashtag.create(data);
      return hashtag;
    }catch(e){
      console.log("somehting went wrong on the repository layer");
      console.log(e);
      throw e;
    }
  }
  async bulkcreate(data){  // here data is basically array of objects
    try{
       const tags=await Hashtag.insertMany(data);
       return tags;
    }catch(e){
      console.log("somrhting went wrong on the repository layer")
    }
  }
  async get(id){
    try{
      const hashtag=await Hashtag.findById(id);
      return hashtag;
    }catch(e){
      console.log("somrhting went wrong on the repository layer")
    }
  }
  
  async destroy(id){
    try{
      const hashtag=await Hashtag.findByIdAndDelete(id);
      return hashtag;
    }catch(e){
      console.log("somrhting went wrong on the repository layer")
    }
  }
  async findByName(titleList){
     try{
      const tags=await Hashtag.find({
        title:titleList
      })
      return tags;
    }catch(e){
      console.log("somrhting went wrong on the repository layer")
    }
  }
  
}
module.exports=Hashtagrepository