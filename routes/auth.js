const express = require('express');
const authRouter  = express.Router();

/* GET Auth routes */

authRouter.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = authRouter;
