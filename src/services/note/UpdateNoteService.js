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
            }
         });

         const newNote = await noteModel.findOne({
            where: {
               id: id
            }
         });
   
         return newNote;
      }catch(e){
         throw new Error('Error updating database record');
      }

   }
}

module.exports = UpdateNoteService;