const express = require('express');
const aux = require('../helpers/auxFunctions');
const puppeteer = require('puppeteer');

const searchRouter  = express.Router();

/* GET & POST Search routes */

searchRouter.get('/:product', (req, res) => {
  //console.log('Probando')

  if(!req.params.product) return res.status(500).json({msg: 'No product defined'});

  //console.log('Back',req.params.product)

  res.status(200).json({msg: req.params.product})
  
});


module.exports = searchRouter;