exports.up = function(knex, Promise) {
  return knex.schema.createTable('song', (table) =>{
    table.increments();
    table.integer('id_song');
    table.string('title');
    table.string('alternativeTitle');
    table.string('artist');
    table.string('performer')
    table.string('band');
    table.integer('year');
    table.string('language');
    table.string('physical');
    table.string('catNo');
    table.string('barcodes');
    table.string('tracks');
    table.string('ALL');
    table.string('side_a');
    table.string('side_b');
    table.integer('band_has_artist_band_id_band');
    table.integer('band_has_artist_artist_id_artist');
    table.integer('record_id_record').references('id').inTable('song').onDelete('CASCADE').index();
  
  table.timestamps(true, true);
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('song');

};
