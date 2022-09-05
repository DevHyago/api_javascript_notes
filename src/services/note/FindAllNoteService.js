const noteModel = require('../../models/Note');

class FindAllNoteService{

   async execute(id){

      const notes = await noteModel.findAll({
         where: {
            author_id: id
         }
      });

      return notes;

   }

}

module.exports = FindAllNoteService;