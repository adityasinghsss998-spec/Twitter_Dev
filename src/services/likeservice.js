import {Likerepository,Tweetrepository} from '../reposiory/index.js'
class Likeservice {
   constructor(){
     this.likerepository=new Likerepository();
     this.tweetrepository=new Tweetrepository();
   }
   async togglelink(modelId,modelType,userId){ // /api/v1/likes/togle? id=modelid&type=Tweet
   if(modelType=='Tweet'){
   var likeable=await this.tweetrepository.find(modelId);

   }
   else if(modelType=='Comment'){

   }
   else{
     throw new Error('Unknown modelType')
   }
   const exists=await this.likerepository.findByUserAndLikable({
    user:userId,
    OnModel:modelType,
    likeable:modelId
   })
   if(exists){
     likeable.likes.pull(exists.id);
     await likeable.save();
     await this.likerepository.destroy(exists.id);
     var isAdded=false;
   }
   else{
   const newlike=await this.likerepository.create({
    user:userId,
    OnModel:modelType,
    likeable:modelId
   })
   likeable.likes.push(newlike);
   await likeable.save();
   var isAdded=true;
   }
   return isAdded;
   }
}
export default Likeservice