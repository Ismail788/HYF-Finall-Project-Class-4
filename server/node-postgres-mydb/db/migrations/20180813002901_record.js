exports.up = function(knex, Promise) {
  return knex.schema.createTable('record', (table)=>{
    table.increments();
    table.integer('id_record');
    table.string('title');
    table.string('alternativeTitle');
    table.string('artist');
    table.string('performer')
    table.string('band');
    table.integer('year');
    table.string('label');
    table.string('language');
    table.string('location');
    table.string('physical');
    table.string('catNo');
    table.string('barcode');
    table.string('tracks');
    table.string('all');
    table.string('audio_simple_path');
    table.timestamps(true, true);
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('record');

};
