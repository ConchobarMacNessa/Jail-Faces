const express = require('express');

const app = express.Router();

module.exports = [
  app.get('/api', (req, res) => {
    res.status(200);
    getFace();
  }),
];
