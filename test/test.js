'use strict';

var assert = require('assert');
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
/*
  * Test the /GET route
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
            	// console.log('fof')
            	// console.log(res);
                expect(res).to.have.status(200);
                // res.body.should.be.a('array');
                // console.log('----', res)
                // console.log('----', err)
                // res.body.length.should.be.eql(0);
              	done();

            });
      });
  });

 });

// var expect = require("expect.js");
// var Sequelize = require("sequelize");
// var sequelize = new Sequelize("postgres://localhost:5432/studenttomentortest", {logging: false});
// var Models = require('../models/models.js');
// var userService = require("./../userService")(sequelize);
// let server = require('../server');
 
// describe("admin", function () {
//     var mockResponse = function (callback) { return { send: callback }; };
//     var newUser = { email: "Johne", first_name:"imjohne", last_name:"fsdf" };
 
//     beforeEach(function (done) {
//         sequelize.sync({ force: true}).then(function () { done(); }, function(err){done(err);});
//     });

//      // beforeEach((done) => { //Before each test we empty the database
//      //    Models.User.destroy({truncate: true}, (err) => {
//      //       done();        
//      //    });
 
//     it("should find created users", function (done) {
//         //arrange
//         Models.User.create(newUser).then(function () {
//             //act
//             get({'/user'}, mockResponse(function (data) {
//                 //assert
//                 expect(data[0].username).to.eql(newUser.username);
//                 done();
//             }, function(err){done(err);}))
//         })
//     });
//     it("should create user", function (done) {
//         //arrange
//         var req = { body: newUser };
//         //act
//         server.create(req, mockResponse(function (statusCode) {
//             //assert
//             expect(statusCode).to.eql(200);
//             done();
//         }))
//     });
// });