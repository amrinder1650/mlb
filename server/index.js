const express = require('express');
const app = express();
const cors = require('cors');
var models = require('./models.js');

app.use(cors());

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.get('/teams', (req, res) => {
  models.teams.get((err, results) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).send(results);
    }
  })
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${PORT}`);
});