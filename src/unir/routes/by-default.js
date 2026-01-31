const express = require('express');
const ruteo = express.Router();
var cors = require('cors');

var api = express.Router();
api.use(cors());

ruteo.get('*', (req, res) => {
  res.status(404).send('Resource not found');
});

ruteo.post('*', (req, res) => {
  res.status(404).send('Resource not found');
});

ruteo.put('*', (req, res) => {
  res.status(404).send('Resource not found');
});

ruteo.delete('*', (req, res) => {
  res.status(404).send('Resource not found');
});

module.exports = ruteo;