const express = require('express');
const aux = require('../helpers/auxFunctions');
const puppeteer = require('puppeteer');

const searchRouter  = express.Router();

/* GET & POST Search routes */

searchRouter.get('/:product', (req, res) => {
  //console.log('Probando')
  if(!req.params.product) return res.status(500).json({msg: 'No product defined'});
  //console.log('Back',req.params.product)
  //Search Product Script
  (async()=>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
      await page.goto(`https://www.superama.com.mx/buscar/${req.params.product}`);
      // Wait for the results page to load and display the results.
      const resultsSelector = '.isotope-item';
      await page.waitForSelector(resultsSelector);
      // Extract the results from the page.
      const items = await page.evaluate(() =>
      Array.from(document.querySelectorAll( '.isotope-item'))
        .map(item => ({
          image: item.querySelector('.upcImage img').src ,
          name: item.querySelector('.upcName a').innerText.trim(),
          price: item.querySelector('.upcPrice').innerText.trim()
          })
        )
      )
      console.log(items);
      await browser.close();
      res.status(200).json({items, msg: 'Search executed succesfully'})
    } catch (err) {
      console.log('Error on Search', err)
      res.status(500).json({msg:'Something whent wrong! Try again', err})
    }
  })();
});

module.exports = searchRouter;