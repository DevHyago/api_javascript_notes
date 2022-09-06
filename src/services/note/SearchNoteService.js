const noteModel = require('../../models/Note');

class SearchNoteService{
   async execute(query, id){

      const notes = await noteModel.findAll({
         where:{
            author_id: id
         }
      });

      if(!notes){
         throw new Error("You don't have any notes");
      }

      const notesFilter = notes.filter(note => {
         const title = note.title.toLowerCase();
         const body = note.body.toLowerCase();
         const search = query.toLowerCase();
         return title.includes(search) || body.includes(search);
      });

      if(notesFilter.length === 0){
         throw new Error('No results found');
      }

      return notesFilter;
   }
}

module.exports = SearchNoteService;