
const records = require(' ../../../seed.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('song').del()
    .then(function () {
      const songsList= [];
      records.map(record =>{
        songsList.push({
          'title': record.title,
          'alternativeTitle':record.alternativeTitle,
          'artist': record.artist,
          'performer':record.performer,
          'band':record.band,
          'year':record.year,
          'language': record.language,
          'physical': record.physical,
          'catNO': record.catNO,
          'brocode':record.brocode,
          'track':record.track,
          'All': record.All,
          'side_a': record.side_a,
          'side_b': record.side_b
      })
      });
      return knex('song').insert(song);
      // Use knex to insert songsList into table songs
  });

};
