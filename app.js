require('dotenv/config');
const { db } = require('./src/database/db');
const express = require('express');
const routeUser = require('./src/routes/users');
const routeNote = require('./src/routes/notes');

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use('/user', routeUser);
app.use('/note', routeNote);

app.listen(PORT, async () => {
   await db.sync();
   console.log(`Server started on port ${PORT}`);
});