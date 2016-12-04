# StudentToMentor

# How to Run

Run `npm install` to install all the packages.

Create a postgres database connected to port 5432.

Create a folder called `react_bundles` in `/public/javascripts/`.

Run `./node_modules/.bin/webpack -d` to create the React bundle files.

Run `node server` to start the web server.

# Design

# Enhancements

- Passwords are hashed using the `bsyncjs` module. When a new user registers, passwords are salted with the default of 10 rounds before being stored in the database. At login, the entered password is checked against the hashed password using `compareSync`

- The search page includes frontend validation by using the HTML `pattern` attribute to specify formats for certain fields

- Testing
