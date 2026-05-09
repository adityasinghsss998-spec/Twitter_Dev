class Crudrepository{
  constructor(model){
    this.model=this.model;
  }
  async create(data){
    try{
      const result=await this.model.create(data);
      return result;
    }catch(e){
      console.log("something went wrong at the repository layer");
      throw e;
    }
  }
  async destroy(id){
      try{
      const result=await this.model.findByIdAndDelete(id);
      return result;
    }catch(e){
      console.log("something went wrong at the repository layer");
      throw e;
    }
  }
   async get(id){
      try{
      const result=await this.model.findById(id);
      return result;
    }catch(e){
      console.log("something went wrong at the repository layer");
      throw e;
    }
  }
   async getall(){
      try{
      const result=await this.model.find({});
      return result;
    }catch(e){
      console.log("something went wrong at the repository layer");
      throw e;
    }
  }
   async update(id,data){
      try{
      const result=await this.model.findByIdAndUpdate(id,data,{new:true});
      return result;
    }catch(e){
      console.log("something went wrong at the repository layer");
      throw e;
    }
  }
}
export default Crudrepository