const records = require(' ../../../seed.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('record').del()
    .then(function () {
      const recordsList =[];
    records.map(record=> {
    recordsList.push({
        'title': record.title,
        'alternativeTitle': record.alternativeTitle,
        'record_lable': record.record_lable,
        'location': record.location
      })
    });
      // Inserts seed entries
      return knex('record').insert(recordsList);
      console.log(recordsList);
    });
};
