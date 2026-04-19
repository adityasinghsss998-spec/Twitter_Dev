import express from 'express';
const app=express();
import {connect} from './config/database.js'
import TweetService from './services/tweetservice.js';
const PORT=3000;
app.listen(3000,async ()=>{
  console.log('server started');
  await connect();
  console.log("mongodb server connected");
 const service =new TweetService();
 await service.create({content:"done with #RefAactor"})
  
})