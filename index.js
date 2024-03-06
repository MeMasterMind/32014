const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index', { name: '32014' });
});

app.listen(port, () => console.log(`app listening on port ${port}!`));