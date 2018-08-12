const songs = require(' ../../../seed.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artist').del()
    .then(function () {
      const artistsList =[];
    artistsList.map(artist=> {
    artistsList.push({
        'full_name': band.full_name

      })
    });
      // Inserts seed entries
      return knex('artist').insert(artistsList);
      console.log(artistsList);
    });
};
