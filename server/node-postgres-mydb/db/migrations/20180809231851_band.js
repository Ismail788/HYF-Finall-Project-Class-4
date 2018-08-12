exports.up = function(knex, Promise) {
  return knex.schema.createTable('band', (table)=>{
    table.increments();
    table.integer('id_band');
    table.string('name');

    table.timestamps(true, true);
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('band');

};
