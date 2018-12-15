const express = require('express');
const aux = require('../helpers/auxFunctions');
const puppeteer = require('puppeteer');

const searchRouter  = express.Router();

/* GET & POST Search routes */

searchRouter.get('/:product', (req, res) => {
  if(!req.params.product) return res.status(500).json({msg: 'No product defined'});
  //Search Product Script
  (async()=>{
    try{
      let items = [];
      const browser = await puppeteer.launch({args:['--no-sandbox']});
      
      const page1 = await browser.newPage();
      await page1.goto(`https://www.superama.com.mx/buscar/${req.params.product}`);

      /*
      const page2 = await browser.newPage();
      await page2.goto(`https://super.walmart.com.mx/productos?Ntt=${req.params.product}`);

      const page3 = await browser.newPage();
      await page3.goto(`http://www.sorianadomicilio.com`);
      */

      // Wait for the results page to load and display the results.
      let resultsSelector1 = '.isotope-item';
      await page1.waitForSelector(resultsSelector1);

      // Extract the results from the page.
      const itemsSuperama = await page1.evaluate(() =>
        Array.from(document.querySelectorAll( '.isotope-item'))
          .map(item => {

            let link = item.querySelector('.upcImage a').href;
            let upc = link.slice(link.length-13,link.length);
            //console.log ('UPC code =====> ', upc);
            
            return ({
              market: 'Superama',
              //upc: item.filter(':hidden').querySelector('upcProducto').nodeValue,
              upc: upc,
              link: item.querySelector('.upcImage a').href,
              image: item.querySelector('.upcImage img').src ,
              name: item.querySelector('.upcName a').innerText.trim(),
              price: item.querySelector('.upcPrice').innerText.trim(),
              priceNum: parseFloat((item.querySelector('.upcPrice').innerText.trim()).replace('$','')),
              //  offer: item.querySelector('.upcPrice span').innerText.trim()
            })
          }
        )
      )

      /*
      // Wait for the results page to load and display the results.
      const resultsSelector2 = '.uQ-k7HpBzPnfbLxnly2YX';
      await page2.waitForSelector(resultsSelector2);
      // Extract the results from the page.
      const itemsWalmart = await page2.evaluate(() =>
        Array.from(document.querySelectorAll('.uQ-k7HpBzPnfbLxnly2YX'))
          .map(item => {

            let link = item.querySelector('.wgFsXe0rWIHJdHC4IodHq a').href;
            let upc = link.slice(link.length-13,link.length);
            //console.log ('UPC code =====> ', upc);
            
            return ({
              market: 'Walmart',
              //upc: item.filter(':hidden').querySelector('upcProducto').nodeValue,
              upc: upc,
              link: item.querySelector('.wgFsXe0rWIHJdHC4IodHq a').href,
              image: item.querySelector('.wgFsXe0rWIHJdHC4IodHq img').src ,
              name: item.querySelector('.wgFsXe0rWIHJdHC4IodHq img').alt,
              price: item.querySelector('.wKmucxCRgoQZshD8qRUcV p').innerText.trim(),
              priceNum: parseFloat((item.querySelector('.wKmucxCRgoQZshD8qRUcV p').innerText.trim()).replace('$','')),
              //  offer: item.querySelector('.upcPrice span').innerText.trim()
            })
          }
        )
      )

      */

      /*

      await page3.type('#Txt_Bsq_Descripcion', req.params.product);

      const searchButton = '.renglonbuscador tbody tr td:last-child input'

      await page3.waitForSelector(searchButton)
      await page3.click(searchButton)

      // Wait for the results page to load and display the results.
      const resultsSelector3 = '.carLi';
      await page3.waitForSelector(resultsSelector3);
      // Extract the results from the page.
      const itemsWalmart = await page3.evaluate(() =>
        Array.from(document.querySelectorAll('.carLi'))
          .map(item => {

            let image = item.querySelector('.artDi3 img').src;
            let upc = link.slice(link.length-26,link.length-13);
            //console.log ('UPC code =====> ', upc);
            
            return ({
              market: 'Soriana',
              //upc: item.filter(':hidden').querySelector('upcProducto').nodeValue,
              upc: upc,
              link: item.querySelector('.artDi3 a').href,
              image: item.querySelector('.artDi3 img').src ,
              name: item.querySelector('.txtarticulohome').innerText.trim(),
              price: item.querySelector('.precioarticulohome').innerText.trim(),
              priceNum: parseFloat((item.querySelector('.precioarticulohome').innerText.trim()).replace('$','')),
              offer: item.querySelector('.DivPromo').innerText.trim()
            })
          }
        )
      )

      */

      itemsSuperama.forEach(e => items.push(e));
      
      /*
      itemsWalmart.forEach(e => items.push(e));
      itemsSoriana.forEach(e => items.push(e));
      */

      console.log(items);
      await browser.close();

      (async function sortItems(all){
          all.sort((a,b)=>{
            return a.priceNum - b.priceNum
          });
          await res.status(200).json({items, msg: 'Search executed succesfully'})
        })(items);

    } catch (err) {
      console.log('Error on Search', err)
      res.status(500).json({msg:'Something whent wrong! Try again', err})
    }
  })();
});

module.exports = searchRouter;