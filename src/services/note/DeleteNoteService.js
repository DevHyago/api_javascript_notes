const noteModel = require('../../models/Note');

class DeleteNoteService{
   async execute(id){

      try{

         await noteModel.destroy({
            where: {
               id: id
            }
         });

      }catch(e){
         throw new Error('Note does not exist');
      }

   }
}

module.exports = DeleteNoteService;