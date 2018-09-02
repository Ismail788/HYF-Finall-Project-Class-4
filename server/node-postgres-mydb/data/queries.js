const knex = require('./knex'); //for connection to database



module.exports = {
  getAll(){
    return knex('record');
  },
  getOne(id){
    return knex('record').where('id', id).first();
  },
  create(record){
    return knex('record').insert(record, '*');
  }

}
