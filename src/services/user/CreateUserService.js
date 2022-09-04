const userModel = require('../../models/User');
const { hash } = require('bcryptjs');

class CreateUserService{
   
   async execute({name, email, password}){

      const passwordHash = await hash(password, 8);

      try{
         const user = await userModel.create({
            name,
            email, 
            password: passwordHash
         });
         return user;
      }catch(e){
         throw new Error('Error saving record in database');
      }

   }

}

module.exports = CreateUserService;