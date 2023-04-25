const express = require('express');
const aux = require('../helpers/auxFunctions');
const playwright = require('playwright');

const searchRouter  = express.Router();

/* GET & POST Search routes */

searchRouter.get('/:product', (req, res) => {
  if(!req.params.product) return res.status(500).json({msg: 'No product defined'});
  (async()=>{
    try{
      let items = [];
      const browser = await playwright.chromium.launch({
        headless: false // setting this to true will not run the UI
      });

      const walmart = await browser.newPage();
      await walmart.goto(`https://super.walmart.com.mx/search?q=${req.params.product}`);

      // Wait for the results page to load and display the results.
      await walmart.waitForSelector('#results-container'); // wait

      // Extract the results from the page.
      const itemsWalmart = await walmart.evaluate(() =>
        Array.from(document.querySelectorAll('div.mb0 > div.h-100'))
          .map(item => {

            let link = item.querySelector('a');
            let upc = link.getAttribute('link-identifier');
            
            return ({
              market: 'Walmart',
              upc: upc,
              link: link.href,
              image: item.querySelector('img').src ,
              name: item.querySelector('img').alt,
              price: item.querySelector('div[data-automation-id] > div').innerText.trim(),
              priceNum: parseFloat((item.querySelector('div[data-automation-id] > div').innerText.trim()).replace('$','')),
            })
          }
        )
      )

      itemsWalmart.forEach(e => items.push(e));

      await browser.close();

      (async function sortItems(all){
          all.sort((a,b)=>{
            return a.priceNum - b.priceNum
          });
          await res.status(200).json({items, msg: 'Search executed succesfully'})
        })(items);

    } catch (err) {
      console.log("Error > ", err)
      res.status(500).json({msg:'Something whent wrong! Try again', err})
    }
  })();
});

module.exports = searchRouter;