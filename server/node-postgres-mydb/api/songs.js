const express = require('express');
const router = express.Router();
const queries = require('../data/queries');

router.get('/', (req, res) =>{
  queries.getAll().then(song =>{
    res.json(song);

  })


});


module.exports = router;
