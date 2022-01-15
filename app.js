const express = require('express');

const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    console.log(req.url);

    res.send('Isa vámonos a casa');
});