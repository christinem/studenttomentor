# StudentToMentor

Project created by Christine Murad, Christina Chen, and Jasmin Lantos for CSC309: Introduction to Web Programming.

StudentToMentor is an app that aims to aid school administrators responsible for running a mentorship program in the matching of students to mentors. It features user profiles, where both students and mentors can detail their contact information, as well as additional information, such as interests, that can help match students with suitable mentors. A search page is included, where users can look up the profiles of other users. Students may submit a mentorship program application, where they express interest in the program and provide information about their career goals and preferences that may further help their pairing to a suitable mentor.

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
