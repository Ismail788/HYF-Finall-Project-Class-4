const request = require('supertest');
const knex = require('../data/knex');
const app = require('../app');
//const expect = require('chai').expect;
describe('CRUD recordsList', () => {
	before((done) => {
		//run migration
		knex.migrate.latest().then((done) => {
			//run the seed
			return knex.seed.run();
		}).then(() => done());
	});
	it('Lists All record', (done) => {
		request(app).get('../api/v1/record').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).then((response) => {
			expect(response.body).to.be.a('array');
			expect(response.body).to.deep.equal(fixtures.record);
			done();
		});
	});
	it('Show one record by id', (done) => {
		request(app).get('../api/v1/record/1').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).then((response) => {
			expect(response.body).to.be.a('object');
			expect(response.body).to.deep.equal(fixtures.record[0]);
			done();
		});
	});
	it('Show one record by id', (done) => {
		request(app).get('../api/v1/recod/5').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).then((response) => {
			expect(response.body).to.be.a('object');
			expect(response.body).to.deep.equal(fixtures.record[4]);
			done();
		});
	});
});
