var express = require('express');
var app = express();
var Models = require('../models/models.js');
require('sequelize');


app.get('/applications', function(req, res) {
	if (req.query.id) {
        return Models.Application.findById(req.query.id, { attributes: ['ID', 'stu_num', 'year'] })
        .then(function(applications) {
            res.json(applications);
        })
    }

    return Models.Application.findAll({ attributes: ['ID', 'stu_num',
    	'grad_date', 'past_participation', 'interests', 'mentor_preferences',
    	'purpose', 'year']
    })
        .then(function(applications) {
            res.json(applications);
        })
});

app.post('/applications', function(req, res) {
	let newApplication = req.body;
    Models.Application.create(newApplication).then(return "Successfully created application");
});

app.put('/applications', function(req, res) {

});

app.delete('/applications', function(req, res) {

});


module.exports = app;
