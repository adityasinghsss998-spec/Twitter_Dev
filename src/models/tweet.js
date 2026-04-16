const mongoose=require('mongoose');
const tweetSchema=new mongoose.Schema({
  content:{
  type:String,
  required:true,
  max:[250,"tweet cannot be more than 250 characters"]
  },
  hashtags:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'Hashtag'
    }
  ]
 
 
},{timestamps:true})
// tweetSchema.pre('save',function(next){
//   console.log('inside the hooks');
//   this.content=this.content + '....';
//   next;
// })
// tweetSchema.virtual('contentWithEmail').get(function process(){
//   return  `${this.content} \n created by ${this.userEmail}`
// })
const Tweet=mongoose.model('Tweet',tweetSchema);
module.exports=Tweet