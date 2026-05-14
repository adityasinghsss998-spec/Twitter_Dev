import express from 'express';
import bodyParser from 'body-parser'
const app=express();
import {connect} from './config/database.js'
import passport from 'passport';
import {passportAuth} from './config/jwtmiddleware.js'
app.use(passport.initialize());
passportAuth(passport)
const PORT=3000;
import Apiroutes from './routes/index.js';
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',Apiroutes);
app.listen(3000,async ()=>{
  console.log('server started');
  await connect();
  console.log("mongodb server connected");

  // const userrepo=new Userrepository();
  // const tweetrepo=new Tweetrepository();
  // const likeservice = new Likeservice();
  // const tweets=await tweetrepo.getAll(0,10);
  // const users=await userrepo.getall();
  
  // const like=await likeservice.togglelink(tweets[0].id,'Tweet',users[0].id);
  // console.log(like);
})