const express = require('express');
const aux = require('../helpers/auxFunctions');
const puppeteer = require('puppeteer');

const searchRouter  = express.Router();

/* GET & POST Search routes */

searchRouter.get('/:product', (req, res) => {
  //console.log('Probando')

  if(!req.params.product) return res.status(500).json({msg: 'No product defined'});

  //console.log('Back',req.params.product)

  ///// Search Product Script

  (async()=>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto('https://www.superama.com.mx');
    
    // Type into search box.
    //await page.type('#searchbox input', 'tortillinas');
    await page.type('#searchBox input', 'tortillinas');
    
    // Wait for suggest overlay to appear and click "show all results".
    const searchButton = '.barraDeBusquedaButton';
    await page.waitForSelector(searchButton);
    await page.click(searchButton);
    
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
    
    res.status(200).json({msg: req.params.product})
  })();


  ////////

  
});


module.exports = searchRouter;