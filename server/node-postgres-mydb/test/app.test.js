const request = require('supertest');
const knex = require('../data/knex');
const app = require('../app');
const expect = require('chai').expect;
describe('CRUD songs', () =>{
  before((done) =>{
    //run migration
    knex.migrate.latest()
    .then((done)=>{
      //run the seed
      return knex.seed.run();
    }).then(() => done());


  });
it('Lists All record', (done)=>{
  request(app)
  .get('../api/v1/songs')
  .set('Accept', 'application/json')
  .expect('Content-Type', /json/)
  .expect(300)
  .then((response)=>{
  expect(response.body).to.be.a('array');
  //console.log(response.body);
  done();
  })

});
});
