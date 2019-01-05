const express = require('express');
const Item = require('../models/Item')
const Search = require('../models/Search')

const itemRouter  = express.Router();

/* GET & POST Search routes */

itemRouter.get('/:id', (req, res) => {
  console.log(req.params.id)

  Item.find({ userId: req.params.id})
    .then(list => {
      res.status(200).json({list, msg: 'List retrieved succesfully'})
    })
    .catch(err => {
      console.log('Get List Error =====>', err);
      res.status(500).json({err, msg: 'Ouch! Algo salió mal y no se obtuvo tu lista'});
    })  
});

itemRouter.post('/', (req, res) => {
  //console.log('Item =====>',req.body)
  Item.create(req.body)
    .then(item => {
      console.log('Item', item)
      res.status(200).json({msg: 'Bien! Ya esta en tú lista'});
    })
    .catch(err => {
      console.log('Add Item Error =====>', err);
      res.status(500).json({err, msg: 'Ouch! Algo salió mal y no se agrego a tu lista'});
    });
})

itemRouter.get('/log/:id', (req, res) => {
  console.log(req.params.id)

  Search.find({ userId: req.params.id})
    .sort({'created_at': -1})
    .then(searches => {
      res.status(200).json({searches, msg: 'Searches retrieved succesfully'})
    })
    .catch(err => {
      console.log('Get Searches Error =====>', err);
      res.status(500).json({err, msg: 'Ouch! Algo salió mal y no se obtuvo tu historia de busquedas'});
    })  
});

itemRouter.post('/log', (req, res) => {
  //console.log('Item =====>',req.body)
  Search.create(req.body)
    .then(search => {
      console.log('Search', search)
      res.status(200).json({msg: 'Bien! Ya esta en tú historico'});
    })
    .catch(err => {
      console.log('Add Search Error =====>', err);
      res.status(500).json({err, msg: 'Ouch! Algo salió mal y no se agrego a tu historia de busquedas'});
    });
})


module.exports = itemRouter;