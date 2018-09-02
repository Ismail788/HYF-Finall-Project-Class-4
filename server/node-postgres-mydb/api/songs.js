const express = require('express');
const router = express.Router();
const queries = require('../data/queries');

function isValidId(req, res, next){
  if(!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}
function validRecord(record){
  const hasTitle = typeof song.title == 'string' && song.title.trim() != '';
  const hasUrl = typeof song.url == 'string' && song.url.trim() != '';
  return hasTitle && hasArtist;
}
router.get('/', (req, res) =>{
  queries.getAll().then(song =>{
    res.json(song);

  })

});
router.get('/:id', isValidId, (req, res, next) => {
queries.getOne(req.params.id).then(song => {
  if(song){
  res.json(song);
}else {
  next(err);
}

})
});
router.post('./', (req, res, next)=>{
  if(validRecord(req.body)){
    queries.create(req.body).then(song =>{
      res.json(song[0]);
    });

  }else {
    next(new Error('Invalid Record'));
  }
})
module.exports = router;
