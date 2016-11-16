// var pg = require('pg');
// var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/mylivenotes';

// var client = new pg.Client(connectionString);
// client.connect();

// client.query("drop schema if exists MyLiveNotes cascade;");
// client.query("create schema MyLiveNotes;");

// // create Tables
// client.query("create table Users(uID integer primary key, \
//                                  username varchar(40), \
//                                  password varchar(40));");
// client.query("create table Document(diD integer primary key, \
//                                     content varchar(40), \
//                                     uID integer, \
//                                     title varchar(200), \
//                                     foreign key (uID) references Users);");
// client.query("create table Annotation(aID integer primary key, \
//                                       content varchar(200), \
//                                       length integer, \
//                                       category varchar(40), \
//                                       color varchar(40), \
//                                       visible BOOLEAN, \
//                                       dID integer, \
//                                       foreign key (dID) references Document);");

// // insert values
// client.query("insert into Users(uID, username, password) values (1, 'Christine', 'hello');");
// client.query("insert into Document(dID, content, uID, title) values (1, 'Hello I am a document', 1, \
//               'Fantastic Document');");
// client.query("insert into Annotation(aID, content, length, category, color, visible, dID) values (1, 'Hello', \
//               5, 'Highlight', 'Yellow', True, 1);");
// client.query("insert into Annotation(aID, content, length, category, color, visible, dID) values (2, 'I am', \
//               4, 'Underline', 'Black', True, 1);");
// var query = client.query("insert into Annotation(aID, content, length, category, color, visible, dID) values \
//                          (3, 'document', 8, 'Highlight', 'Yellow', False, 1);");


// query.on('end', function() { client.end(); });

///

// require('sequelize');
var sequelize = require('./sequelize.js');
var Models = require('./models.js');

Models.sequelize.sync({force: true});

Models.User.create({uID: 1, username: 'Christine', password: 'hello'});
Models.Document.create({dID: 1, content: 'Hello I am a document', uID: 1, title: 'Fantastic Document'});
Models.Annotation.create({aID: 1, content: 'Hello', length: 5, category: 'Highlight', color: 'Yellow', visible: true, dID: 1});
Models.Annotation.create({aID: 2, content: 'I am', length: 4, category: 'Highlight', color: 'Yellow', visible: true, dID: 1});
Models.Annotation.create({aID: 3, content: 'document', length: 8, category: 'Highlight', color: 'Yellow', visible: false, dID: 1});
