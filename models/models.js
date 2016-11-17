var connection = require('./sequelize.js');
var Sequelize = require('sequelize');

var User = connection.define('users', {
        uID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
        },
    }, {timestamps: false, freezeTableName: true, tableName: 'users'});


var Document = connection.define('documents', {
        dID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        /*
        uID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users', 
                key: 'uID'
            }
        },
        */
        title: {
            type: Sequelize.STRING
        },
    }, {timestamps: false, freezeTableName: true, tableName: 'documents'});


var Paragraph = connection.define('paragraphs', {
        pID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        content: {
            type: Sequelize.STRING
        },
        dID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'documents',
                key: 'dID'
            }
        }
    }, {timestamps: false, freezeTableName: true, tableName: 'paragraphs'});


var Annotation = connection.define('annotations', {
        aID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        content: {
            type: Sequelize.STRING
        },
        length: {
            type: Sequelize.INTEGER
        },
        category: {
            type: Sequelize.STRING
        },
        color: {
            type: Sequelize.STRING
        },
        visible: {
            type: Sequelize.BOOLEAN
        },
        pID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'paragraphs',
                key: 'pID'
            }
        },
        uID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users', 
                key: 'uID'
            }
        },
        start: {
            type: Sequelize.INTEGER
        },
    }, {timestamps: false, freezeTableName: true, tableName: 'annotations'});

// create and populate tables
connection.sync({force: true})
    .then(function(err) {
        User.create({uID: 1, username: 'Christine', password: 'hello'});
        User.create({uID: 2, username: 'Velian', password: 'meme'});

        Document.create({dID: 1, /*uID: 1,*/ title: 'Fantastic Document'});


        Paragraph.create({pID: 1, content: 'Hello, I am a document. This is just a random paragraph.', dID: 1});
        Paragraph.create({pID: 2, content: 'I am surely a document. This is another random paragraph.', dID: 1});
        Paragraph.create({pID: 3, content: 'You have to believe I am a document. This is....you guessed it....another random paragraph!', dID: 1});

        Annotation.create({aID: 1, content: 'Hello', length: 5, category: 'Highlight', color: 'Yellow', 
            visible: true, pID: 1, uID: 1, start: 0});
        Annotation.create({aID: 2, content: 'I am', length: 4, category: 'Highlight', color: 'Yellow', 
            visible: true, pID: 2, uID: 1, start: 0});
        Annotation.create({aID: 3, content: 'document', length: 8, category: 'Highlight', color: 'Yellow', 
            visible: false, pID: 3, uID: 1, start: 27});
        Annotation.create({aID: 4, content: 'document', length: 8, category: 'Highlight', color: 'Yellow', 
            visible: true, pID: 3, uID: 2, start: 27});
    });

module.exports.User = User;
module.exports.Document = Document;
module.exports.Paragraph = Paragraph;
module.exports.Annotation = Annotation;