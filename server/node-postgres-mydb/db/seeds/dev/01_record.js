
const records = require(' ../../../archive.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('record').del()
    .then(function () {
      const recordsList =[];
    records.map(record=> {
    recordsList.push({
        'id': record.id,
        'title': record.title,
        'alternativeTitle':record.alternativeTitle,
        'artist': record.artist,
        'performer':record.performer,
        'band':record.band,
        'year':record.year,
        'label':record.label,
        'language': record.language,
        'location': record.location,
        'physical': record.physical,
        'catNo': record.catNo,
        'barcode':record.barcode,
        'location': record.location,
        'url': record.url
      })
    });
      // Inserts seed entries
      return knex('record').insert(recordsList);
      //console.log(recordsList);
    });
};
