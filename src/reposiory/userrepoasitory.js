import User from "../models/User.js";
import Crudrepository from "./crudrepository.js";
class Userrepository extends Crudrepository { 
  constructor(){
    super(User);
  }
}
export default Userrepository