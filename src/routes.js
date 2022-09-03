const { Router } = require('express');
const userModel = require('./models/User');
const noteModel = require('./models/Note');
const router = Router();

//Users
router.post('/user/register', async (req, res) => {

   const { name, email, password } = req.body;

   const user = await userModel.create({
      name,
      email, 
      password
   });

   return res.status(201).json(user);

});

//Notes
router.post('/note', async (req, res) => {

   const { title, body, author } = req.body;

   const user = await noteModel.create({
      title,
      body,
      author_id: author
   });

   return res.status(201).json(user);

});


module.exports = router;