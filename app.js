const express = require('express');

const app = express();

app.listen(3000);

app.use(express.static('public'));


app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/works', (req, res) => {
    res.sendFile(__dirname + '/views/works.html');
});

app.get('/gallery', (req, res) => {
    res.sendFile(__dirname + '/views/gallery.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});
