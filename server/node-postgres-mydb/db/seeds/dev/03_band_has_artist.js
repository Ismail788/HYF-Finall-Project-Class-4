const songs = require(' ../../../seed.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artist').del()
    .then(function () {
      const band_has_artistList =[];
    band_has_artistList.map(band_has_artist=> {
    band_has_artistList.push({
        'id_band': band.id_band,
        'id_artist': artist.id_artist

      })
    });
      // Inserts seed entries
      return knex('band_has_artist').insert(band_has_artistList);
      console.log(band_has_artistList);
    });
};
