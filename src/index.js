import express from 'express';
import bodyParser from 'body-parser'
const app=express();
import {connect} from './config/database.js'
import TweetService from './services/tweetservice.js';
const PORT=3000;
import Apiroutes from './routes/index.js';
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',Apiroutes);
app.listen(3000,async ()=>{
  console.log('server started');
  await connect();
  console.log("mongodb server connected");

  
})