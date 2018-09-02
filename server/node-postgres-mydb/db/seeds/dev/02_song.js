
const songs = require(' ../../../archive.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('song').del()
    .then(function () {
      const songsList= [];
      songs.map(song=>{
        songsList.push({
          'id': song.id,
          'title':song.title,
          //'tracks':song.tracks,
          //'all':song.all



      })
      });
      return knex('song').insert(songsList);

  });

};
