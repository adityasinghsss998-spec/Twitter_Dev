import mongoose from "mongoose";
const tweetSchema=new mongoose.Schema({
  content:{
  type:String,
  required:true,
  max:[250,"tweet cannot be more than 250 characters"]
  },
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
export default Tweet;