const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => setTimeout(next, 1000));

app.get('/api/photoes/', (req, res) =>
  res.send(require('./photoes.json')),
);

app.listen(3001, () => console.log('Mock server listening on port 3001'));
