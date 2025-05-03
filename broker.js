const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let messages = []; // In-memory store
let offset = 0;

// Producer endpoint
app.post('/produce', (req, res) => {
  const msg = { id: offset++, timestamp: Date.now(), payload: req.body };
  messages.push(msg);
  res.json({ status: 'ok', message: msg });
});

// Consumer endpoint (simple poll)
app.get('/consume/:lastId', (req, res) => {
  const lastId = parseInt(req.params.lastId);
  const newMessages = messages.filter(m => m.id > lastId);
  res.json(newMessages);
});

app.listen(3000, () => console.log('🚀 Broker running on http://localhost:3000'));
