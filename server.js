const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// CORS: allow your Render URL and local dev
const allowedOrigins = [
  'https://xss-simulation.onrender.com',
  'http://localhost:3000',
  'http://127.0.0.1:3000'
];
app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // allow non-browser / same-origin
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(null, true); // fallback: allow all for lab purposes
  },
  methods: ['GET','POST','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type']
}));
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

// Health and root endpoints
app.get('/', (req, res) => res.send('XSS-simulation API is running'));
app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(port, '0.0.0.0', () => console.log(`Backend listening on 0.0.0.0:${port}`));