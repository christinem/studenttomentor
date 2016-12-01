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
	return Models.Interest.create({
		interest_string: req.body.interest
    }).then(function(result){
	    if (result == 1) {
	        res.send('Successfully added new interest.');
	    } else {
	         res.send('Error adding interest.');
     	}
	});
};

exports.deleteInterest = function(req, res) {
	return Models.Interest.destroy({
        where: {
            interest_string: req.query.interest
        }
    }).then(function(result){
        if(result == 1) {
            res.send('Successfully deleted interest ' + req.query.interest + '.')
        } else {
            res.send('Interest ' + req.query.interest + ' does not exist.')
        } 
    });         
};
