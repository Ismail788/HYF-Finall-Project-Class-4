const knex = require('./knex'); //for connection to database



module.exports = {
  getAll(){
    return knex('song');
  }
}
