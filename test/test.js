'use strict';

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let expect = chai.expect;
var Sequelize = require("sequelize");
var sequelize = new Sequelize("postgres://localhost:5432/studenttomentor", {logging: false});

require('sequelize');
var Models = require('../models/models.js');

chai.use(chaiHttp);


//Our parent block
describe('Users', () => {
    beforeEach((done) => { //Before each test we empty the database
        sequelize.sync({ force: true}).then(function () { done(); }, function(err){done(err);});
    });

      // beforeEach((done) => { //Before each test we empty the database
     //    Models.User.destroy({truncate: true}, (err) => {
     //       done();        
     //    });


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
                // console.log(res)
                expect(res).to.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(3);
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
                res.body.length.should.be.eql(1);
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
                console.log(res);
                expect(res).to.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(1);
                done();

            });
      });
  });

  /*
  * Test the /GET route for applications
  */
  describe('/GET applications', () => {
      it('it should GET all the applications', (done) => {
        chai.request('http://localhost:3000')
            .get('/applications')
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
  * Test the /GET route for interests
  */
  describe('/GET interests', () => {
      it('it should GET all the interests', (done) => {
        chai.request('http://localhost:3000')
            .get('/interests')
            .set('Accept', 'application/json')
            .end(function (err, res){
              if (err) {
                console.log("Error: ", err)
              }
                expect(res).to.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(2);
                done();
            });
      });
  });

 });
