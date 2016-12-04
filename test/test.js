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
describe('Tests', () => {
    // before((done) => { //Before running tests we populate the test database

    //     Models.User.create({first_name: "Christine", last_name: "Murad", gender: "Female", 
    //       student_number: 123456789, birthday: "September 6, 2016", about_text: "Hello",
    //       type_of_user: "s", email: "hello@hello.com", password: 'hello', interests: ['AI', 'HCI']});

    //     Models.User.create({first_name: "Christina", last_name: "Chen", type_of_user: "a", 
    //       email: "goodbye@goodbye.com", password: 'goodbye'});

    //     Models.User.create({first_name: "Jasmine", last_name: "Lantos", gender: "Female", 
    //       birthday: "September 6, 2016", about_text: "Hello",
    //       type_of_user: "m", email: "cookies@cookies.com", password: 'cookies'});

    //     Models.Application.create({expected_grad: "2016", past_participation: false, 
    //         why_interested: "It's awesome", mentor_prefs: "None", year: 2015, uID: 1});

    //     Models.Application.create({expected_grad: "2017", past_participation: true, 
    //         why_interested: "It's awesome", mentor_prefs: "None", year: 2016, uID: 1});

    //     Models.Application.create({expected_grad: "2017", past_participation: true, 
    //         why_interested: "It's awesome", mentor_prefs: "None", year: 2016, uID: 2});

    //     Models.Interest.create({interest_string: "AI"});

    //     Models.Interest.create({interest_string: "HCI"});
    // });

    // after(function() {
    //   //After the tests, empty the test database so it will be squeaky clean next time
    //   Models.User.destroy({truncate: true}, (err) => {
    //     done();        
    //   });
    //   Models.Application.destroy({truncate: true}, (err) => {
    //     done();        
    //   });
    //   Models.Interest.destroy({truncate: true}, (err) => {
    //     done();        
    //   });
    // });

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

  /*
  * Test the /PUT route for students
  */
  describe('/PUT students', () => {
      it('it should PUT a student', (done) => {
        chai.request('http://localhost:3000')
            .put('users/students/1')
            .send({first_name: "Christine", last_name: "Murad", gender: "Female", student_number: 123456789, birthday: "September 6, 2016", about_text: "Hi There!!", type_of_user: "s", email: "hello@hello.com", password: 'hello', interests: '[AI, HCI]'})
            .set('Accept', 'application/json')
            .end(function (err, res){
              if (err) {
                console.log("Error: ", err)
              }
                expect(res).to.have.status(200);
                res.body.should.be.a('string');
                res.body.should.equal('Successfully updated student user 1.')
                done();
            });
      });
  });

  /*
  * Test the /POST route for students
  */
  describe('/POST students', () => {
      it('it should POST a student', (done) => {
        chai.request('http://localhost:3000')
            .post('users/students')
            .send({first_name: "Jam", last_name: "Lan", gender: "Female", student_number: 123456789, birthday: "September 6, 2016", about_text: "Aloha", type_of_user: "s", email: "jam@hello.com", password: 'hello', interests: '[AI, HCI]'})
            // .field('first_name': 'New')
            // .field('last_name': 'Student')
            // .field('gender': 'Female')
            // .field('student_number': 998755761)
            // .field('birthday': 'September 6, 2016')
            // .field('about_text': 'Hi There!!')
            // .field('type_of_user': 's')
            // .field('email': 'new@hello.com')
            // .field('password': 'newhello')
            // .field('interests': '[AI, HCI]')
            .set('Accept', 'application/json')
            .end(function (err, res){
              if (err) {
                console.log("Error: ", err)
              }
                expect(res).to.have.status(200);
                res.body.should.be.a('string');
                res.body.should.equal('Successfully updated student user 1.')
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
                res.body.length.should.be.eql(2);
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

  /*
  * Test the /POST route for interests
  */
  describe('/POST interests', () => {
      it('it should POST the interest', (done) => {
        chai.request('http://localhost:3000')
            .post('/interests')
            .field('interest_string', 'New Interest')
            .set('Accept', 'application/json')
            .end(function (err, res){
              if (err) {
                console.log("Error: ", err)
              }
                expect(res).to.have.status(200);
                res.body.should.be.a('string');
                res.body.should.equal('Successfully added new interest.')
                done();
            });
      });
  });
});
