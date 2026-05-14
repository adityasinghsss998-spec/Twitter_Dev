import { Commentrepository,Tweetrepository} from "../reposiory/index.js";
class Commentservice{
  constructor(){
    this.commentrepo=new Commentrepository();
    this.tweetrepo=new Tweetrepository();
    
  }
  async createComment(modelId,modelType,userId,content){
    if(modelType=='Tweet'){
      var commentable=await this.tweetrepo.get(modelId);
      console.log(commentable);
   }
   else if(modelType=='Comment'){
     var commentable=await this.commentrepo.get(modelId)
   }
   else{
     throw new Error('Unknown modelType')
   }
   const comment=await this.commentrepo.create({
    content:content,
    userId:userId,
    OnModel:modelType,
    commentable:modelId,
    comments:[]

   })
   commentable.comments.push(comment);
   await commentable.save();
   return comment;
  }
}
export default Commentservice