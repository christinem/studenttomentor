# StudentToMentor

# Hosted on Heroku

https://afternoon-depths-52422.herokuapp.com/

# How to Run Locally

Run `npm install` to install all the packages.

Create a postgres database named "studenttomentor" connected to port 5432.

In models/sequelize.js comment out line 3 and uncomment out line 4.

Create a folder called `react_bundles` in `/public/javascripts/`.

Run `npm start` to start the web server.

# Design

# Enhancements

- Passwords are hashed using the `bsyncjs` module. When a new user registers, passwords are salted with the default of 10 rounds of processing before being stored in the database. At login, the entered password is checked against the hashed password using `compareSync` from the `bsync` module

- The search page includes frontend validation by using the HTML `pattern` attribute to check the formats of certain fields (eg. student numbers must be 9-10 digits, names cannot contain digits)

- Testing is done using Mocha and Chai. To run the tests first run 'npm start' in one shell tab, and then run 'npm test' in another. The tests use the same database used by the main server running locally. In the future this could be improved by creating a seperate test database and pre-populating it with testable data.
