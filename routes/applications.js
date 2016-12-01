'use strict';

var express = require('express');
var app = express();
var Models = require('../models/models.js');
require('sequelize');


exports.findApplications = function(req, res) {
	if (req.query.length != 0) {
		let queries = req.query;
		return Models.Application.findAll({
			where: queries,
			attributes: ['id', 'year', 'uID']
		}).then(function(apps) {
            res.json(apps);
        });
    }

    return Models.Application.findAll({
            attributes: ['id', 'year', 'uID']
        }).then(function(apps) {
            res.json(apps);
        });
};

exports.addApplication = function(req, res) {
	let newApplication = req.body;

	return Models.Application.create({
		expected_grad: newApplication.expected_grad,
        past_participation: newApplication.past_participation,
        why_interested: newApplication.why_interested,
        mentor_prefs: newApplication.mentor_prefs,
        year: newApplication.year,
        uID: newApplication.uID
    }).then(function(result){
	    if (result == 1) {
	        res.send('Successfully added application.');
	    } else {
	         res.send('Error adding application.');
     	}
	});
};

exports.updateApplication = function(req, res) {
	let updatedApplication = req.body;

	return Models.Application.update({
        expected_grad: updatedApplication.expected_grad,
        past_participation: updatedApplication.past_participation,
        why_interested: updatedApplication.why_interested,
        mentor_prefs: updatedApplication.mentor_prefs,
        year: updatedApplication.year,
        uID: updatedApplication.uID
    }).then(function(result){
        if (result == 1) {
            res.send('Successfully updated application ' + req.query.id + '.')
        } else {
            res.send('Application with id ' + req.query.id + ' does not exist.')
        }
       
    });
};

exports.deleteApplication = function(req, res) {
	return Models.Application.destroy({
        where: {
            id: req.query.id
        }
    }).then(function(result){
        if(result == 1) {
            res.send('Successfully deleted application ' + req.query.id + '.')
        } else {
            res.send('Application with id ' + req.query.id + ' does not exist.')
        } 
    });         
};
