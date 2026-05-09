import Like from "../models/like.js";
import Crudrepository from "./crudrepository.js";
class Likerepository extends Crudrepository { 
  constructor(){
    super(Like);
  }
}
export default Likerepository