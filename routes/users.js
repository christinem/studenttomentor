var express = require('express');
var app = express();
var Models = require('../models/models.js');
require('sequelize');


// ----------------------------------------------------------

app.get('/users/admins', function(req, res) {

    if (req.query.id) {
        return Models.Admin.findById(req.query.id, { attributes: ['aID', 'first_name', 'last_name', 'email'] })
        .then(function(admins) {
            res.json(admins);
        })
    }

    return Models.Admin.findAll({ attributes: ['aID', 'first_name', 'last_name', 'email'] })
        .then(function(admins) {
            res.json(admins);
        })
});

app.post('/users/admins', function(req, res) {
    let newAdmin = req.body;
    Models.Admin.create(newAdmin).then(return "Successfully added admin");
})

app.get('users/mentors', function(req, res) {
    if (req.query.id) {
        return Models.Mentor.findById(req.query.id, { attributes: ['aID', 'first_name', 'last_name', 'email'] })
        .then(function(mentors) {
            res.json(mentors);
        })
    }

    return Models.Mentor.findAll({ 
        attributes: ['mID', 'first_name', 'last_name', 'email', 'interests', 'about'] 
    })
    .then(function(mentors) {
        res.json(mentors);
    })
});

app.post('/users/mentors', function(req, res) {
    let newMentor = req.body;
    Models.Mentor.create(newMentor).then(return "Successfully added mentor");
})

app.get('users/students', function(req, res) {
    if (req.query.id) {
        return Models.Student.findById(req.query.id, { attributes: ['aID', 'first_name', 'last_name', 'email'] })
        .then(function(students) {
            res.json(students);
        })
    }

    return Models.Student.findAll({ attributes: ['sID', 'stu_num', 'first_name', 'last_name', 'email',
        'interests', 'about']
    })
        .then(function(students) {
            res.json(students);
        })
});

app.post('/users/students', function(req, res) {
    let newStudent = req.body;
    Models.Student.create(newStudent).then(return "Successfully added student");
})


// ----------------------------------------------------------


module.exports = app;
