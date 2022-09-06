require('dotenv/config');
const { db } = require('./src/database/db');
const express = require('express');
require('express-async-errors');
const cors = require('cors');

const routeUser = require('./src/routes/users');
const routeNote = require('./src/routes/notes');

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use(cors());
app.use('/user', routeUser);
app.use('/note', routeNote);

app.use((err, req, res, next) => {
   if(err instanceof Error){
      return res.json({
         message: err.message
      });
   }

   return res.status(500).json({
      status: 'error',
      message: 'Internal server error'
   });

});

app.listen(PORT, async () => {
   await db.sync();
   console.log(`Server started on port ${PORT}`);
});