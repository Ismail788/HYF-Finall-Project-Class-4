
exports.up = function(knex, Promise) {
  return knex.schema.createTable('song', (table) =>{
    table.increments();
    table.string('title');
    table.string('url');
    table.integer('id_record').references('id').inTable('song');

  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('song');

};
