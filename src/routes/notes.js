const { Router } = require('express');
const auth = require('../middlewares/auth');
const isOwner = require('../middlewares/isOwner');
const noteController = require('../Controllers/NoteController');

const router = Router();

router.post('/', auth, noteController.create);
router.get('/:id', auth, isOwner, noteController.findOne);
router.get('/', auth, noteController.findAll)

module.exports = router;