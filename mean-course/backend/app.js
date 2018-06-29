const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('ho');
  next();
});

app.use((req, res, next) => {
  res.send('Hello');
});

module.exports = app;
