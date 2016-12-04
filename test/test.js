'use strict';

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let expect = chai.expect;
var Sequelize = require("sequelize");
var sequelize = new Sequelize("postgres://localhost:5432/studenttomentor", {logging: false});

var Models = require('../models/models.js');

chai.use(chaiHttp);

//Our parent block
describe('Users', () => {
  /*
  * Test the /GET route for users
  */
  describe('/GET users', () => {
      it('it should GET all the users', (done) => {
        chai.request('http://localhost:3000')
            .get('/users')
            .set('Accept', 'application/json')
            .end(function (err, res){
            	if (err) {
            		console.log("Error: ", err)
            	}
                expect(res).to.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(7);
              	done();

            });
      });
  });

  /*
  * Test the /GET route for admins
  */
  describe('/GET admins', () => {
      it('it should GET all the admins', (done) => {
        chai.request('http://localhost:3000')
            .get('/users/admins')
            .set('Accept', 'application/json')
            .end(function (err, res){
              if (err) {
                console.log("Error: ", err)
              }
                expect(res).to.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(1);
                done();

            });
      });
  });

  /*
  * Test the /GET route for mentors
  */
  describe('/GET mentors', () => {
      it('it should GET all the mentors', (done) => {
        chai.request('http://localhost:3000')
            .get('/users/mentors')
            .set('Accept', 'application/json')
            .end(function (err, res){
              if (err) {
                console.log("Error: ", err)
              }
                expect(res).to.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(3);
                done();

            });
      });
  });

  /*
  * Test the /GET route for students
  */
  describe('/GET students', () => {
      it('it should GET all the students', (done) => {
        chai.request('http://localhost:3000')
            .get('/users/students')
            .set('Accept', 'application/json')
            .end(function (err, res){
              if (err) {
                console.log("Error: ", err)
              }
                expect(res).to.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(3);
                done();
            });
      });
  });
});
