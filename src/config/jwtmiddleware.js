import JWT, { ExtractJwt } from 'passport-jwt';
import User from '../models/User.js';
const Jwtstrategy=JWT.Strategy;
const extractjwt=JWT.ExtractJwt;
const opts={
  jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey:'twitter-secret'
}
export const  passportAuth=(passport)=>{
  passport.use(new Jwtstrategy(opts,async(jwt_payload,done)=>{
    const user = User.findById(jwt_payload.id);
     if(!user){
      done(null,false);
     }
     else{
      done(null,user);
     }
  }))
}