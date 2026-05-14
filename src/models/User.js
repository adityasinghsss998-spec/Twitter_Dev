import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
const userSchema=mongoose.Schema({
  email:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
  },
  name:{
    type:String,
    required:true,
  }
},{timestamps:true});
userSchema.pre('save',async function(next){
  if (!this.isModified('password')) return;
  const user=this;
  const SALT=bcrypt.genSaltSync(9);
  const encrypted_password=bcrypt.hashSync(user.password,SALT);
  user.password=encrypted_password;

})
userSchema.methods.comparepassword=function compare(password){
  
  return bcrypt.compareSync(password,this.password);
}
userSchema.methods.genJwt=function (){
  return jwt.sign({id:this.id,email:this.email},'twitter-secret',{
    expiresIn:'1h'
  });
}
const User=mongoose.model('User',userSchema);
export default User;