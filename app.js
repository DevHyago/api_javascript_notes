require('dotenv/config');
const { db } = require('./src/database/db');
const express = require('express');
const routes = require('./src/routes');

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use('/', routes);

app.listen(PORT, async () => {
   await db.sync();
   console.log(`Server started on port ${PORT}`);
});