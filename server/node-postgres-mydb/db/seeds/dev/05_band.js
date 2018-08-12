const songs = require(' ../../../seed.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('band').del()
    .then(function () {
      const bandsList =[];
    bands.map(band=> {
    bandsList.push({
        'name': band.name


      })
    });
      // Inserts seed entries
      return knex('band').insert(bandsList);
      console.log(bandsList);
    });
};
