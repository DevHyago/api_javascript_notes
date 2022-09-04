require('dotenv/config');
const { db } = require('./src/database/db');
const express = require('express');
const routerUser = require('./src/routes/users');

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use('/', routerUser);

app.listen(PORT, async () => {
   await db.sync();
   console.log(`Server started on port ${PORT}`);
});