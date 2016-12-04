# StudentToMentor

# How to Run

Run `npm install` to install all the packages.

Create a postgres database connected to port 5432.

Create a folder called `react_bundles` in `/public/javascripts/`.

Run `npm start` to start the web server.

# Design

# Enhancements

- Passwords are hashed using the `bsyncjs` module. When a new user registers, passwords are salted with the default of 10 rounds of processing before being stored in the database. At login, the entered password is checked against the hashed password using `compareSync` from the `bsync` module

- The search page includes frontend validation by using the HTML `pattern` attribute to check the formats of certain fields (eg. student numbers must be 9-10 digits, names cannot contain digits)

- Testing
