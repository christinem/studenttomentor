var express = require('express');
var app = express();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Models = require('../models/models.js');
require('sequelize');
require('../models/userlogin.js')();

// ----------------------------------------------------------

app.get('/documents', function(req, res) {
    return Models.Document.findAll({ attributes: ['dID', 'title'] })
        .then(function(documents) {
            res.json(documents);
        })
});

app.get('/annotations', function(req, res) {
    return Models.Annotation.findAll({ 
        attributes: ['aID', 'content', 'length', 'category', 'color', 'visible', 
                     'pID', 'uID', 'start'] 
    })
    .then(function(annotations) {
        res.json(annotations);
    })
});

app.get('/paragraphs', function(req, res) {
    return Models.Paragraph.findAll({ attributes: ['pID', 'content', 'dID'] })
        .then(function(paragraphs) {
            res.json(paragraphs);
        })
});

// ----------------------------------------------------------

var auth = function(req, res, next) { 
    if (!req.isAuthenticated()) 
        res.redirect('/login'); 
    else next(); 
}; 


app.get('/', function(req, res) {
    res.render('login', {user: req.user});
})

app.post('/login',
    passport.authenticate('local', { successRedirect: '/homepage',
                                     failureRedirect: '/login'}));

app.get('/login', function(req, res) {
    res.render('login', {user: req.user});
})

app.get('/homepage', auth, function(req, res) {
    res.render('homepage', { title: 'Homepage!', user: req.user });
});

app.get('/documentview', auth, function(req, res) {
    res.render('document_view', { title: 'Document View', user: req.user });
});

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/login');
});

app.get('/register', function(req, res) {
    res.render('register', { });
});

app.get('/user_info', function(req, res) {
    res.json(req.user);
});

// module.exports = app;
