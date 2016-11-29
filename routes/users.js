'use strict';

var express = require('express');
var app = express();
var Models = require('../models/models.js');
var Sequelize = require('sequelize');

// ----------------------------------------------------------

// ----- General Users ------ //

exports.findUsers = function(req, res) {
    if (req.query.length != 0) {
        return Models.User.findAll({
            where: req.query,
            attributes: ['id', 'first_name', 'last_name', 'email'] 
        }).then(function(admins) {
            res.json(admins);
        })
    }

    return Models.User.findAll({
        attributes: ['id', 'first_name', 'last_name', 'email'] 
    }).then(function(admins) {
        res.json(admins);
    });
};

// ----- Admins ------ //

exports.findAdmins = function(req, res) {
    if (req.query.length != 0) {
        let queries = req.query;
        queries["type_of_user"] = "a";
        return Models.User.findAll({
            where: queries,
            attributes: ['id', 'first_name', 'last_name', 'email'] 
        }).then(function(admins) {
            res.json(admins);
        });
    }

    return Models.User.findAll({
        where: {type_of_mentor: "a"},
        attributes: ['id', 'first_name', 'last_name', 'email'] 
    }).then(function(admins) {
        res.json(admins);
    });
};

exports.addAdmin = function(req, res) {
    let newAdmin = req.body;

    return Models.User.findOrCreate({
        where: {
            email: newAdmin.email,
        },
        defaults: {
            first_name: newAdmin.first_name,
            last_name: newAdmin.last_name,
            password: newAdmin.password,
            type_of_user: "a",
        }
    }).then(function(result){
        let created = result[1];
        if (created) {
            res.send('Successfully added admin.');
        } else {
             res.send('Admin with that email already exists.');
        }
    });
};

exports.updateAdmin = function(req, res) {
    return Models.User.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password}, {
            where: {
                id: req.query.id,
                type_of_user: "a"
            }
        }).then(function(result){
            if(result == 1) {
                res.send('Successfully updated admin user ' + req.query.id + '.')
            } else {
                res.send('Admin with id ' + req.query.id + ' does not exist.')
            }
        });
};

exports.deleteAdmin = function(req, res) {
    return Models.User.destroy({
        where: {
            id: req.query.id,
            type_of_user: 'a'
        }}).then(function(result){
             if(result == 1) {
                res.send('Successfully deleted admin user ' + req.query.id + '.')
            } else {
                res.send('Admin with id ' + req.query.id + ' does not exist.')
            } 
        });
};

// ----- Mentors ------ //

exports.findMentors = function(req, res) {
    if (req.query.length != 0) {
        let queries = req.query;

        let interests_query;
        if (req.query.interests) {
            interests_query = req.query.interests.split(',');
            queries['interests'] = {$contains: interests_query};
        }

        queries["type_of_user"] = "m";
        return Models.User.findAll({
            where: queries,
            attributes: ['id', 'first_name', 'last_name', 'email', 'interests', 'about_text']
        }).then(function(mentors){
            res.json(mentors);
        });
    }

    return Models.User.findAll({
        where: {type_of_user: "m"},
        attributes: ['id', 'first_name', 'last_name', 'email', 'interests', 'about_text'] 
    }).then(function(mentors){
        res.json(mentors);
    });
};

exports.addMentor = function(req, res) {
    let newMentor = req.body;

    return Models.User.findOrCreate({
        where: {
            email: newMentor.email,
        },
        defaults: {
            first_name: newMentor.first_name,
            last_name: newMentor.last_name,
            gender: newMentor.gender,
            birthday: newMentor.birthday,
            interests: newMentor.interests,
            about_text: newMentor.about_text,
            password: newMentor.password,
            type_of_user: "m",
        }
    }).then(function(result){
        let created = result[1];
        if (created) {
            res.send('Successfully added mentor.');
        } else {
             res.send('Mentor with that email already exists.');
        }
    });
};

exports.updateMentor = function(req, res) {
    return Models.User.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
        birthday: req.body.birthday,
        interests: req.body.interests,
        about_text: req.body.about_text,
        password: req.body.password}, {
            where: {
                id: req.query.id,
                type_of_user: "m"
            }
        }).then(function(result){
            if(result == 1) {
                res.send('Successfully updated mentor user ' + req.query.id + '.');
            } else {
                res.send('Mentor with id ' + req.query.id + ' does not exist.');
            }  
        });
};

exports.deleteMentor = function(req, res) {
    return Models.User.destroy({
        where: {
            id: req.query.id,
            type_of_user: 'm'
        }}).then(function(result){
             if(result == 1) {
                res.send('Successfully deleted mentor user ' + req.query.id + '.');
            } else {
                res.send('Mentor with id ' + req.query.id + ' does not exist.');
            }
        });
};

// ----- Students ------ //

exports.findStudents = function(req, res) {
    let queries = req.query;

    let interests_query;
    if (req.query.interests) {
        interests_query = req.query.interests.split(',');
        queries['interests'] = {$contains: interests_query};
    }

    if (req.query.length != 0) {
        queries["type_of_user"] = "s";
        return Models.User.findAll({
            where: queries,
            attributes: ['id', 'student_number', 'first_name', 'last_name', 'email', 'interests', 'about_text']
        }).then(function(students) {
            res.json(students);
        });
    }

    return Models.User.findAll({
        where: {type_of_mentor: "s"},
        attributes: ['id', 'student_number', 'first_name', 'last_name', 'email', 'interests', 'about_text']
    }).then(function(students) {
        res.json(students);
    });
};

exports.addStudent = function(req, res) {
    let newStudent = req.body;

    return Models.User.findOrCreate({
        where: {
            email: newStudent.email,
        },
        defaults: {
            first_name: newStudent.first_name,
            last_name: newStudent.last_name,
            student_number: newStudent.student_number,
            gender: newStudent.gender,
            birthday: newStudent.birthday,
            interests: newStudent.interests,
            about_text: newStudent.about_text,
            password: newStudent.password,
            type_of_user: "s",
        }
    }).then(function(result){
        let created = result[1];
        if (created) {
            res.send('Successfully added student.');
        } else {
            res.send('Student with that email already exists.');
        }
    });
};

exports.updateStudent = function(req, res) {
    return Models.User.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
        birthday: req.body.birthday,
        interests: req.body.interests,
        about_text: req.body.about_text,
        password: req.body.password}, {
            where: {
                id: req.query.id,
                type_of_user: "s"
            }
        }).then(function(result){
            if (result == 1) {
                res.send('Successfully updated student user ' + req.query.id + '.');
            } else {
                res.send('Student with id ' + req.query.id + ' does not exist.');
            }
        });
};

exports.deleteStudent = function(req, res) {
     return Models.User.destroy({
        where: {
            id: req.query.id,
            type_of_user: 's'
        }}).then(function(result){
            if(result == 1) {
                res.send('Successfully deleted student user ' + req.query.id + '.')
            } else {
                res.send('Student with id ' + req.query.id + ' does not exist.')
            }
        });
};

// ----------------------------------------------------------
