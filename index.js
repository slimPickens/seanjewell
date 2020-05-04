const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.get('/', (req, res) => res.send('Welcome to SeanJewell.com'));

app.get('/live', (req, res) => res.render('live'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
