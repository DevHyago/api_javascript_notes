const noteModel = require('../../models/Note');

class CreateNoteService{
   async execute({title, body, id}){

      try{

         const note = await noteModel.create({
            title,
            body,
            author_id: id
         });

         return note;

      }catch(e){
         throw new Error('Error service creating note');
      }

   }
}

module.exports = CreateNoteService;