const {Tweetrepository,Hashtagrepository}=require('../reposiory/index')
class TweetService{
   constructor(){
    this.tweetrepository=new Tweetrepository();
    this.hashtagrepository=new Hashtagrepository();
   }
   async create(data){
      const content=data.content;
      let tags=content.match(/#[a-zA-Z0-9_]+/g)  // this is a regex
      tags=tags.map((tag)=> tag.substr(1));
      console.log(tags);
      const tweet=await this.tweetrepository.create(data);
      let alreadyPresentTags=await this.hashtagrepository.findByName(tags);
      let titleofalreadyPresentTags=alreadyPresentTags.map((tag)=>tag.title);
      let newtags = tags.filter(tag => !titleofalreadyPresentTags.includes(tag));
      newtags=newtags.map(tag=>{
         return { title:tag,tweets:[tweet.id]}
      });
      for(const t of alreadyPresentTags){
         t.tweets.push(tweet.id);
         await t.save();
      }
      const response=await this.hashtagrepository.bulkcreate(newtags);
      return response;
      
      //todo create hashtags and add here
      /*
      1. bulkcreate in mongoose
      2. filter title of hastag based on multiple tags
      3. how to add tweet id inside all the hashtags
      */
      return tweet;
   }
}
module.exports=TweetService