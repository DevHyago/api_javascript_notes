const jwt = require('jsonwebtoken');
const userModel = require('../models/User');
const secret = process.env.JWT_SECRET;

async function auth(req, res, next){

   const token = req.headers['x-acces-token'];

   if(!token){
      return res.status(401).end();
   }

   jwt.verify(token, secret, (err, decode) => {

      if(err){
         throw new Error('Unauthorized: Token invalid');
      }

      let user;

      try{
         const user = await userModel.findOne({
            where:{
               email: decode.email
            }
         });

         req.user = user;

         next();
      }catch(e){
         throw new Error('Error fetching user');
      }  

   });

}

module.exports = auth;