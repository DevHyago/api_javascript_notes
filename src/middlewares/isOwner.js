const noteModel = require('../models/Note');

async function isOwner(req, res, next){

   const { id } = req.params;
   const userId = req.user.id;

   const note = await noteModel.findOne({
      where:{
         id: id
      }
   });

   if(!note){
      throw new Error('The note does not exist');
   }

   if(note.author_id === userId){
      next();
   }else{
      throw new Error('You are not allowed to acces third-party notes!');
   }

}

module.exports = isOwner;