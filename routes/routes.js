var passport = require('passport');

var user_routes = require('./users');
var interest_routes = require('./interests');
var application_routes = require('./applications');

module.exports = function(app) {

  // ---------- Routes for Users ---------- //
  app.get('/users', user_routes.findUsers);

  app.get('/users/admins', user_routes.findAdmins);
  app.post('/users/admins', user_routes.addAdmin);
  app.put('/users/admins', user_routes.updateAdmin);
  app.delete('/users/admins', user_routes.deleteAdmin);

  app.get('/users/mentors', user_routes.findMentors);
  app.post('/users/mentors', user_routes.addMentor);
  app.put('/users/mentors', user_routes.updateMentor);
  app.delete('users/mentors', user_routes.deleteMentor);

  app.get('/users/students', user_routes.findStudents);
  app.post('/users/students', user_routes.addStudent);
  app.put('/users/students', user_routes.updateStudent);
  app.delete('/users/students', user_routes.deleteStudent);

  // ---------- Routes for Interests ---------- //
  app.get('/interests', interest_routes.findInterests);
  app.post('/interests', interest_routes.addInterest);
  app.delete('/interests', interest_routes.deleteInterest);

  // ---------- Routes for Applications ---------- //
  app.get('/applications', application_routes.findApplications);
  app.post('/applications', application_routes.addApplication);
  app.put('/applications', application_routes.updateApplication);
  app.delete('/applications', application_routes.deleteApplication);
}

