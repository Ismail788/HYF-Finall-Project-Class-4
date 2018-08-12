exports.up = function(knex, Promise) {
  return knex.schema.createTable('band_has_artist', (table)=>{
    table.increments();
    table.integer('id_band').references('id').inTable('band_has_artist').notNullable();
    table.integer('id_artist').references('id').inTable('band_has_artist').notNullable();
    table.integer('id_song').references('id').inTable('band_has_artist').onDelete('CASCADE').index();
    //table.integer('song_id').references('id').inTable('song').onDelete('CASCADE').index();
    table.timestamps(true, true);
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('band_has_artist');

};
