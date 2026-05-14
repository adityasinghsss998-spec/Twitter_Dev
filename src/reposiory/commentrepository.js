import Comment from "../models/comment.js"
import Crudrepository from "./crudrepository.js"
class Commentrepository extends Crudrepository{
    constructor(){
      super(Comment);
    }
    
}
export default Commentrepository