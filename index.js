const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => res.send('Welcome to SeanJewell.com'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));