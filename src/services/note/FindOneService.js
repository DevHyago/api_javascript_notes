const noteModel = require('../../models/Note');

class FindOneService{

   async execute(id){

      const note = await noteModel.findOne({
         where: {
            id: id,
         },
      });

      if(!note){
         throw new Error('The note does not exist');
      }

      return note;
      
   }

}

module.exports = FindOneService;