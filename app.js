require('dotenv/config');
const express = require('express');

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
   return res.json({message: 'Hello Word'});
});

app.listen(PORT, () => {
   console.log(`Server started on port ${PORT}`);
});