const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let comments = [];

app.get('/comments', (req, res) => res.json(comments));

app.post('/comments', (req, res) => {
    comments.push({
        name: req.body.name,
        email: req.body.email,
        comment: req.body.comment,
        date: new Date().toLocaleString()
    });
    res.json({ ok: true });
});

app.delete('/comments', (req, res) => {
    comments = [];
    res.json({ ok: true });
});

app.listen(port, () => console.log(`Backend listening on port ${port}`));