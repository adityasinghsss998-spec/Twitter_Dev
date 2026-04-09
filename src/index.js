const express=require('express');
const Tweet=require('./models/tweet');
const app=express();
const connect=require('./config/database');
const PORT=3000;
const Comment=require('./models/comment')
const Tweetrepository = require('./reposiory/tweetrepository');
app.listen(3000,async ()=>{
  console.log('server started');
  await connect();
  console.log("mongodb server connected");
  //  const tweet=await Tweet.create({
  //  content:'third tweet',
    
  //  });
  const tweetrepo=new Tweetrepository();
  // const tweet=await tweetrepo.create({content:'mytweet with comments'});
  // const comment=await Comment.create({content:'this is my comment'});
  // tweet.comments.push(comment.id);
  // await tweet.save();
  // console.log('without unpopulate',tweet)
  // const updatedTweet = await tweetrepo.getwithcomments(tweet.id);
  // await tweet.save()
  // console.log('populate tweet',updatedTweet);


  //   const tweet=await tweetrepo.getAll(0,4);
   // tweet[1].userEmail="abcd@gmail.com"
  // await tweet[1].save();
  // console.log(tweet[1].contentWithEmail);
  const tweet=await tweetrepo.create({content:'with hooks'});
  console.log(tweet)
  
})