'use strict';

var express = require('express');
var app = express();
var Models = require('../models/models.js');
require('sequelize');


exports.findInterests = function(req, res) {
	if (req.query.length != 0) {
		let queries = req.query;
		return Models.Interest.findAll({
			where: queries,
			attributes: ['interest_string']
		}).then(function(interests) {
            res.json(interests);
        });
	}

    return Models.Interest.findAll({
        attributes: ['interest_string']
    }).then(function(interests) {
            res.json(interests);
        });
};

exports.addInterest = function(req, res) {
	return Models.Interest.findOrCreate({
        where: {
		  interest_string: req.body.interest_string,
        },
    }).then(function(result){
        let created = result[1];
        if (created) {
            res.send('Successfully added new interest.');
        } else {
             res.send('Error adding interest.');
        }
	});
};

exports.deleteInterest = function(req, res) {
	return Models.Interest.destroy({
        where: {
            interest_string: req.query.interest_string
        }
    }).then(function(result){
        if(result == 1) {
            res.send('Successfully deleted interest ' + req.query.interest_string + '.')
        } else {
            res.send('Interest ' + req.query.interest_string + ' does not exist.')
        } 
    });         
};
