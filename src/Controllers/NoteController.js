const CreatedNoteService = require('../services/note/CreateNoteService');
const FindOneService = require('../services/note/FindOneService');
const FindAllNoteService = require('../services/note/FindAllNoteService');

class NoteController{

   async create(req, res){
      const { title, body } = req.body;

      const { id } = req.user;
   
      const createNoteService = new CreatedNoteService();

      const note = await createNoteService.execute({title, body, id});


      return res.status(201).json(note);
      
   }

   async findOne(req, res){
      const { id } = req.params;

      const findOneService = new FindOneService();
      
      const note = await findOneService.execute(id);

      return res.json(note);

   }

   async findAll(req, res){
      const { id } = req.user;

      const findAllNoteService = new FindAllNoteService();

      const notes = await findAllNoteService.execute(id);

      return res.json(notes);

   }

}

module.exports = new NoteController();