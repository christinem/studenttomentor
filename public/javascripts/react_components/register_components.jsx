import React from "react";
import { render } from "react-dom";
import {NavBar, Panel} from "./common_components.jsx";

var RegisterPage = React.createClass ({
	render: function() {
		return (
			<div>
        <NavBar />
        <div className="page-header">
          <h1 className="title"> Welcome to StudentToMentor! </h1>
        </div>
        <RegisterForm />
      </div>
		);
	}
});

var RegisterForm = React.createClass ({
	render: function() {
		return (
			<div className="container">
        <div className="col-md-6 col-md-offset-3">
          <Panel title="Register">
            <form id="register_form" action="/users/students" method="post">
              <p> Email: </p> <input type="text" name="username" placeholder="example@example.com" />
              <p> Password: </p> <input type="password" name="password" placeholder="Password" />
              <p> First Name: </p> <input type="text" name="firstname" placeholder="John" />
              <p> Last Name: </p> <input type="text" name="lastname" placeholder="Last Name" />
              <p> Student Number: </p> <input type="text" name="studentnumber" placeholder="123456789" />
              <p> Gender: </p> <select name="gender"><option value="male">Male</option><option value="female">Female</option></select>
              <p> Birthday: </p> <input type="text" name="birthday" placeholder="DD/MM/YYYY" />
              <p> Interests: </p> <input type="text" name="interests" placeholder="Interests" />
              <p> About: </p> <input type="text" name="about" placeholder="About" />
              <input id="register_button" 
                     className="btn btn-default center-block" 
                     type="submit" 
                     value="Register" />
            </form>
          </Panel>
        </div>
      </div>
		);
	}
});

render(<RegisterPage />, document.getElementById("root"));
