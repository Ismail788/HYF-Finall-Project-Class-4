exports.up = function(knex, Promise) {
  return knex.schema.createTable('record', (table)=>{
    table.increments();
    table.integer('id_record');
    table.string('title').notNullable();
    table.string('alternativeTitle').notNullable();
    table.string('record_lable');
    table.string('location');
    //table.integer('song_id').references('id').inTable('song').onDelete('CASCADE').index();
    table.timestamps(true, true);
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('record');

};
