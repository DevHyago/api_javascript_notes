const userModel = require('../../models/User');
const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');

class AuthUserService{

   async execute({email, password}){

      console.log(`Email: ${email} - Senha: ${password}`);

      const user = await userModel.findOne({
         where: {
            email: email
         }
      });

      if(!user){
         throw new Error('Email/Password incorret');
      }

      const passwordMatch = await compare(password, user.password);

      if(!passwordMatch){
         throw new Error('User/Password incorret');
      }

      //Generator JWT
      const token = sign(
         {
            name: user.name,
            email: user.email
         },
         process.env.JWT_SECRET,
         {
            subject: String(user.id),
            expiresIn: '30d'
         }
      );

      return {
         id: user.id,
         name: user.name,
         email: user.email,
         token: token
      }

   }

}

module.exports = AuthUserService;