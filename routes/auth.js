const express = require('express');
const authRouter  = express.Router();

/* GET home page */
authRouter.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = authRouter;
