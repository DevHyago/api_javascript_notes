const CreatedNoteService = require('../services/note/CreateNoteService');
const FindOneService = require('../services/note/FindOneService');
const FindAllNoteService = require('../services/note/FindAllNoteService');
const UpdateNoteService = require('../services/note/UpdateNoteService');
const DeleteNoteService = require('../services/note/DeleteNoteService');
const SearchNoteService = require('../services/note/SearchNoteService');

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


   async update(req, res){
      const { id } = req.params;
      const { title, body } = req.body;
      const updateNoteService = new UpdateNoteService();
      const note = await updateNoteService.execute(title, body, id);
      return res.json(note);
   }

   async delete(req, res){
      const { id } = req.params;
      const deleteNoteService = new DeleteNoteService();
      await deleteNoteService.execute(id);
      return res.status(204).send();
   }

   async search(req, res){
      const { query } = req.query;
      const { id } = req.user;
      const searchNoteService = new SearchNoteService();
      const result = await searchNoteService.execute(query, id);
      return res.json(result);
   }

}

module.exports = new NoteController();