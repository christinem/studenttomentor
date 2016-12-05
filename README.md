# StudentToMentor

StudentToMentor is an app that aims to aid school administrators responsible for running a mentorship program in the matching of students to mentors. It features user profiles, where both students and mentors can detail their contact information, as well as additional information, such as interests, that can help match students with suitable mentors. A search page is included, where users can look up the profiles of other users. Students may submit a mentorship program application, where they express interest in the program and provide information about their career goals and preferences that may further help their pairing to a suitable mentor.

# Hosted on Heroku

https://afternoon-depths-52422.herokuapp.com/

# How to Run Locally

Run `npm install` to install all the packages.

Create a postgres database named "studenttomentor" connected to port 5432.

In models/sequelize.js comment out line 3 and uncomment out line 4.

Create a folder called `react_bundles` in `/public/javascripts/`.

Run `npm start` to start the web server.

# User Accounts

Here are accounts for the three types of users that you can use to log in:
- Student - Email: hello@hello.com, Password: hello
- Mentor - Email: cookies@cookies.com, Password: cookies
- Admin - Email: goodbye@goodbye.com, Password: goodbye

# Design

The model of the application is largely divided into two parts: Users and Applications.

- Users

  - There are three types of users: students, mentors, and administrators
  - All users are able to edit their own user profiles, use the advanced search page, and see the profiles of other users
  - Administrators can edit any user profiles, delete users, and view applications
  - Adminstrators have access to a view can view all users and all applications at once.
  - All new users who sign up through the register page are classified as students. New users may not make themselves a mentor or administrator

- Applications

  - Administrators can view anyone's applications
  - Students can create new applications, and can view their applications by clicking on their existing applications from the dashboard

# Enhancements

- Passwords are hashed using the `bsyncjs` module. When a new user registers, passwords are salted with the default of 10 rounds of processing before being stored in the database. At login, the entered password is checked against the hashed password using `compareSync` from the `bsync` module
- The search page includes frontend validation by using the HTML `pattern` attribute to check the formats of certain fields (eg. student numbers must be 9-10 digits, names cannot contain digits)
- Testing is done using Mocha and Chai. To run the tests first run 'npm start' in one shell tab, and then run 'npm test' in another. The tests use the same database used by the main server running locally. In the future this could be improved by creating a seperate test database and pre-populating it with testable data.
- Our web app's user interface is fully responsive
- A user cannot delete their own profile from the app

# Unimplemented Features

This section includes features of the app that were not implemented due to time constraints

- The matching view detailed in the proposal is missing
- Administrators cannot see which user each application belongs to
- An interests table is present in the model. We intended for administrators to be able to add and delete interests so users can choose interests from a predefined list
- Frontend validation was attempted with the registration page, but using form elements resulted in no data being sent to the POST request (even though data was still generated correctly on the frontend)
- Student numbers are not forced to be unique
- Only Students can register for the app at the moment
- When Students register, they can currently only list one interest
- Interests are uneditable at the moment
- Applications are currently uneditable
- We don't have front-end messages to show when something has succeeded or failed (for example, when updating a profile or creating new user/application)
