const express = require('express');
const aux = require('../helpers/auxFunctions');
const puppeteer = require('puppeteer');

const searchRouter  = express.Router();

/* GET & POST Search routes */

searchRouter.get('/:product', (req, res) => {
  if(!req.params.product) return res.status(500).json({msg: 'No product defined'});
  (async()=>{
    try{
      let items = [];
      const browser = await puppeteer.launch({args:['--no-sandbox']});
      
      const superama = await browser.newPage();
      await superama.goto(`https://www.superama.com.mx/buscar/${req.params.product}`);

      const walmart = await browser.newPage();
      await walmart.goto(`https://super.walmart.com.mx/productos?Ntt=${req.params.product}`);
      
      let resultsSuperama = '.isotope-item';
      await superama.waitForSelector(resultsSuperama);

      // Extract the results from the page.
      const itemsSuperama = await superama.evaluate(() =>
        Array.from(document.querySelectorAll( '.isotope-item'))
          .map(item => {

            let link = item.querySelector('.upcImage a').href;
            let upc = link.slice(link.length-13,link.length);
            
            return ({
              market: 'Superama',
              upc: upc,
              link: item.querySelector('.upcImage a').href,
              image: item.querySelector('.upcImage img').src ,
              name: item.querySelector('.upcName a').innerText.trim(),
              price: item.querySelector('.upcPrice').innerText.trim(),
              priceNum: parseFloat((item.querySelector('.upcPrice').innerText.trim()).replace('$','')),
            })
          }
        )
      )

      // Wait for the results page to load and display the results.
      const resultsWalmart = '._3zEPnC-pJyatDRRu2hPGoE';
      await walmart.waitForSelector(resultsWalmart);
      // Extract the results from the page.
      const itemsWalmart = await walmart.evaluate(() =>
        Array.from(document.querySelectorAll('._3zEPnC-pJyatDRRu2hPGoE'))
          .map(item => {

            let link = item.querySelector('._3UiJcNPfwkKEBTqJn3N6D3 a').href;
            let upc = link.slice(link.length-13,link.length);
            
            return ({
              market: 'Walmart',
              upc: upc,
              link: link,
              image: item.querySelector('._3UiJcNPfwkKEBTqJn3N6D3 img').src ,
              name: item.querySelector('._3UiJcNPfwkKEBTqJn3N6D3 img').alt,
              price: item.querySelector('._3URSxitsrGAcwITNRI6nvM').innerText.trim(),
              priceNum: parseFloat((item.querySelector('._3URSxitsrGAcwITNRI6nvM').innerText.trim()).replace('$','')),
            })
          }
        )
      )

      itemsSuperama.forEach(e => items.push(e));
      itemsWalmart.forEach(e => items.push(e));

      await browser.close();

      (async function sortItems(all){
          all.sort((a,b)=>{
            return a.priceNum - b.priceNum
          });
          await res.status(200).json({items, msg: 'Search executed succesfully'})
        })(items);

    } catch (err) {
      res.status(500).json({msg:'Something whent wrong! Try again', err})
    }
  })();
});

module.exports = searchRouter;