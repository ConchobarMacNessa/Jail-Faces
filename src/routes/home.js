const express = require('express');

const app = express.Router();

module.exports = [
  app.get('/', (req, res) => {
    res.send('hello');
    res.status(200);
  }),
];
