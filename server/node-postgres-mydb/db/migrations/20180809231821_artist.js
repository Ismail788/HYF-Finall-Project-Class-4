exports.up = function(knex, Promise) {
  return knex.schema.createTable('artist', (table)=>{
    table.increments();
    table.integer('id_artist');
    table.string('full_name');
    //table.integer('song_id').references('id').inTable('song').onDelete('CASCADE').index();
    table.timestamps(true, true);
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('artist');

};
