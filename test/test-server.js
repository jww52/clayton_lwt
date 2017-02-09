const chai = require('chai');
const chaiHttp = require('chai-http');
var request = require('superagent');

// const faker = require('faker');
// const mongoose = require('mongoose');

// this makes the should syntax available throughout
// this module
// const should = chai.should();
const expect = chai.expect;

const {app} = require('../server');
// const {BlogPost} = require('../models');
// const {app, runServer, closeServer} = require('../server');
// const {TEST_DATABASE_URL} = require('../config');

chai.use(chaiHttp);

describe('Clayton LWT MVP', () => {
  it('should give the html and status of 200', (done) => {
     chai.request(app)
    .get('/')
    .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
    });
  });
});

// describe('The Georges Guidebook mvp', (req, res) => {
//   it('should give the html and status of 200', (err, done) => {
//     return chai.request(app)
//     .get('/')
//     .res.status(200)
//     .end(done);
//   });
// });
