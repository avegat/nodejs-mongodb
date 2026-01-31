const userModel = require("../models/userModel");
class UserService {
  
  

  async addUser(data) {
    
    const exists = await userModel.find(data);
    if(exists.length>0)
    {
      return true;
    }
    const record =userModel.create(data);
    return false;
  }

 async getUser(data) {
    const exists = await userModel.find(data);
    return await ({"response":exists});
  }
}



module.exports = UserService;