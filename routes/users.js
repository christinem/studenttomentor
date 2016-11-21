'use strict';

var express = require('express');
var app = express();
var Models = require('../models/models.js');
require('sequelize');

// ----------------------------------------------------------

// ----- General Users ------ //

exports.findUsers = function(req, res) {
    if (req.query.length != 0) {
        return Models.User.findAll({
            where: req.query,
            attributes: ['uID', 'first_name', 'last_name', 'email'] 
        }).then(function(admins) {
            res.json(admins);
        })
    }

    return Models.User.findAll({
        attributes: ['uID', 'first_name', 'last_name', 'email'] 
    }).then(function(admins) {
        res.json(admins);
    })
};

// ----- Admins ------ //

exports.findAdmins = function(req, res) {
    if (req.query.length != 0) {
        let queries = req.query;
        queries["type_of_mentor"] = "a";
        return Models.User.findAll({
            where: queries,
            attributes: ['uID', 'first_name', 'last_name', 'email'] 
        }).then(function(admins) {
            res.json(admins);
        });
    }

    return Models.User.findAll({
        where: {type_of_mentor: "a"},
        attributes: ['uID', 'first_name', 'last_name', 'email'] 
    }).then(function(admins) {
        res.json(admins);
    });
};

// app.post('/users/admins', function(req, res) {
//     let newAdmin = req.body;
//     Users.User.create(newAdmin).then(return "Successfully added admin");
// })

// ----- Mentor ------ //

exports.findMentors = function(req, res) {
    if (req.query.length != 0) {
        let queries = req.query;
        queries["type_of_mentor"] = "m";
        return Models.User.findAll({
            where: queries,
            // attributes: ['uID', 'first_name', 'last_name', 'email', 'interests', 'about'] 
            attributes: ['uID', 'first_name', 'last_name', 'email', 'about_text'] 
        }).then(function(mentors) {
            res.json(mentors);
        });
    }

    return Models.User.findAll({
        where: {type_of_mentor: "m"},
        // attributes: ['uID', 'first_name', 'last_name', 'email', 'interests', 'about'] 
        attributes: ['uID', 'first_name', 'last_name', 'email', 'about_text'] 
    }).then(function(mentors) {
        res.json(mentors);
    });
};

// app.post('/users/mentors', function(req, res) {
//     let newMentor = req.body;
//     Users.User.create(newMentor).then(return "Successfully added mentor");
// })

// ----- Students ------ //

exports.findStudents = function(req, res) {
    if (req.query.length != 0) {
        let queries = req.query;
        queries["type_of_mentor"] = "s";
        return Models.User.findAll({
            where: queries,
            // attributes: ['uID', 'student_number', 'first_name', 'last_name', 'email', 'interests', 'about']
            attributes: ['uID', 'student_number', 'first_name', 'last_name', 'email', 'about_text']
        }).then(function(students) {
            res.json(students);
        });
    }

    return Models.User.findAll({
        where: {type_of_mentor: "s"},
        // attributes: ['uID', 'student_number', 'first_name', 'last_name', 'email', 'interests', 'about']
        attributes: ['uID', 'student_number', 'first_name', 'last_name', 'email', 'about_text']
    }).then(function(students) {
        res.json(students);
    });
};

// app.post('/users/students', function(req, res) {
//     let newStudent = req.body;
//     Users.User.create(newStudent).then(return "Successfully added student");
// })

// ----------------------------------------------------------
