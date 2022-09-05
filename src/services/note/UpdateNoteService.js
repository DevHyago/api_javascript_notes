const noteModel = require('../../models/Note');

class UpdateNoteService{
   async execute(title, body, id){

      try{
         const note = await noteModel.update({
            title,
             body
         }, {
            where: {
               id: id
            },
            returning: true,
            plain: true
         });
   
         return note[1];

      }catch(e){
         throw new Error('Error updating database record');
      }

   }
}

module.exports = UpdateNoteService;