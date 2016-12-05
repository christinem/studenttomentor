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
  - Only administrators can edit any user profile and delete users
  - All new users who sign up through the register page are classified as students. New users may not make themselves a mentor or administrator

- Applications
  - An application is what a user or mentor submits to apply to either be a mentor or mentee for a particular school year.
  - Students and mentors can submit applications, and can view their applications by clicking on their existing applications from the dashboard
  - Administrators can view anyone's applications
  
- Initial data (users and applications) are populated into the database when the app is started (the database is purged and re-populated on every restart of the node app)

# Workflow

- You are greeted with an initial log in page in which you can log in using an existing account, or register for a new one. 
- If you click the register button, a register page will come where they enter in profile and user information (every field must be completed), and when you press "Register", it redirects you back to the log in page so you can log in with the new user if you so choose
- When logged in, you will get one of two dashboards
  - An admin dashboard if logged in as an admin, which includes 
    - A button that leads to a view where you can view all profiles
      - Here, you'll be greeted a view that lists every single user in the database, with some basic info, and a link to go to their profile page
    - A button that leads to a view where you can view all applications
      - Here, you'll be greeted a view that lists every single application in the database, with some basic info, and a link to go to the application page
    - A button that leads to the advanced search page
    - A button to edit your profile
  - An non-admin dashboard if logged in as a student or mentor, which includes 
    - A panel that lists all your existing applications
      - Clicking on any one of these will lead you to the application page for that application
    - A button that leads to the advanced search page
    - A button to edit your profile
- On the advanced search page, you can search for any user in the database. You must first select a type of user in the "User Type" section. If you click Search with only the user type selected, you'll see all the users of that type in the search results. Otherwise, you can use the search options on the page to query for certain users
  - You must query by entire strings. For example, if you want to search for someone with the first name "Christine", searching for the first name "Chris" will not show any users with the first name "Christine"
- On the right part of the nav bar, you can go straight to a read-only version of your profile. There is also a button for you to log out. On the left side of the nav bar, there are links to pages that user has access to the links available to them on the dashboard, so they may access them no matter what page they are on.
- On the read-only view of the profile page, you may see an "Edit Profile" or "Delete Profile" options based on these:
  - If you are an admin, when you are viewing anyone's profile, you will see an Edit and Delete option. When viewing your own, you will have an Edit option but not a Delete option
  - If you are a mentor or student, when you are viewing anyone else's profile, you will have neither Edit nor Delete option. When viewing your own, you will have a Edit option but not a Delete option

# Enhancements

- Passwords are hashed using the `bsyncjs` module. When a new user registers, passwords are salted with the default of 10 rounds of processing before being stored in the database. At login, the entered password is checked against the hashed password using `compareSync` from the `bsync` module
- The search page includes frontend validation by using the HTML `pattern` attribute to check the formats of certain fields (eg. student numbers must be 9-10 digits, names cannot contain digits)
- Testing is done using Mocha and Chai. To run the tests first run 'npm start' in one shell tab, and then run 'npm test' in another. The tests use the same database used by the main server running locally. In the future this could be improved by creating a seperate test database and pre-populating it with testable data.
- Our web app's user interface is fully responsive

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
- A user cannot delete their own profile from the app
- The search result displays all fields regardless of the type of user being searched, even if the field is irrelevant (for example, student number for admins). Fields that are not relevant will shows up empty or as N/A
