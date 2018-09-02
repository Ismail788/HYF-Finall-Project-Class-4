const express = require('express');
const router = express.Router();
const queries = require('../data/queries');

function isValidId(req, res, next){
  if(!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}
function validRecord(record){
  const hasTitle = typeof record.title == 'string' && record.title.trim() != '';
  const hasArtist = typeof record.artist == 'string' && record.artist.trim() != '';
  return hasTitle && hasArtist;
}
router.get('/', (req, res) =>{
  queries.getAll().then(record =>{
    res.json(record);

  })

});
router.get('/:id', isValidId, (req, res, next) => {
queries.getOne(req.params.id).then(record => {
  if(record){
  res.json(record);
}else {
  next(err);
}

})
});
router.post('./', (req, res, next)=>{
  if(validRecord(req.body)){
    queries.create(req.body).then(record =>{
      res.json(record[0]);
    });

  }else {
    next(new Error('Invalid Record'));
  }
})
module.exports = router;
