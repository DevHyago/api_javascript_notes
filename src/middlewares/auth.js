const jwt = require('jsonwebtoken');
const userModel = require('../models/User');
const secret = process.env.JWT_SECRET;

function auth(req, res, next){

   const token = req.headers['x-acces-token'];

   if(!token){
      return res.status(401).end();
   }

   jwt.verify(token, secret, async (err, decode) => {

      if(err){
         throw new Error('Unauthorized: Token invalid');
      }

      try{
         const user = await userModel.findOne({
            where:{
               email: decode.email
            }
         });

         req.user = {
            id: user.id,
            name: user.name,
            email: user.email
         };

         next();
      }catch(e){
         throw new Error('Error fetching user');
      }  

   });

}

module.exports = auth;