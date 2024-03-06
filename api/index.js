const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, '../views'));

app.get('/', (req, res) => {
    res.render('index', { name: '32014' });
});

app.listen(port, () => console.log(`app listening on port ${port}!`));

module.exports = app;