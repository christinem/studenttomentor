import React from "react";
import { render } from "react-dom";
import {NavBar, Panel} from "./common_components.jsx";

var RegisterPage = React.createClass ({
	render: function() {
		return (
			<div>
        <NavBar />
        <div className="page-header">
          <h1 className="title"> Register </h1>
        </div>
        <RegisterForm />
      </div>
		);
	}
});

var RegisterForm = React.createClass ({
  createUser: function() {
    var data = {
      email: this.refs.email.value,
      password: this.refs.password.value,
      first_name: this.refs.first_name.value,
      last_name: this.refs.last_name.value,
      student_number: this.refs.student_number.value,
      gender: $("#gender").val(),
      birthday: this.refs.birthday.value,
      interests: [this.refs.interests.value], 
      about_text: this.refs.about_text.value
    };

    $.ajax({
      url: "/users/students",
      type: "POST",
      contentType:"application/json",
      data: JSON.stringify(data),
      dataType:"text"
    });
  },

	render: function() {
		return (
			<div className="container">
        <div className="col-md-6 col-md-offset-3 text-center">
          <Panel title="Register">
            <form id="register_form" action="">
              <div className="form-group">
                <label htmlFor="email">*Email: </label>
                <br />
                <input className="form-control" type="text" name="email" ref="email" placeholder="example_123@example.com" required pattern="[\w\.]+@[A-Za-z]+\.[A-Za-z]+" title="Please match the format of the example email." />
              </div>     
              <div className="form-group">
                <label htmlFor="password">*Password: </label>
                <br />
                <input className="form-control" type="password" name="password" ref="password" placeholder="Password" required />
              </div>
              <div className="form-group">
                <label htmlFor="first_name">*First Name: </label>
                <br />
                <input className="form-control" type="text" name="first_name" ref="first_name" placeholder="John" required pattern="\D+" title="Must not contain digits." />         
              </div>
              <div className="form-group">
                <label htmlFor="last_name">*Last Name: </label>
                <br />
                <input className="form-control" type="text" name="last_name" ref="last_name" placeholder="John" required pattern="\D+" title="Must not contain digits." />         
              </div> 
              <div className="form-group">
                <label htmlFor="student_number">Student Number: </label>
                <br />
                <input className="form-control" type="text" name="student_number" ref="student_number" placeholder="123456789" pattern="\d{9}(\d{1})?" title="Must contain 9 or 10 digits." />       
              </div>
              <p><b> Gender: </b></p> 
              <select id="gender">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <br />
              <br />
              <div className="form-group">
                <label htmlFor="birthday">Birthday: </label>
                <br />
                <input className="form-control" type="text" name="birthday" ref="birthday" placeholder="DD/MM/YYYY" pattern="\d{2}\/\d{2}\/\d{4}" title="Required format: DD/MM/YYYY" />      
              </div>
              <div className="form-group">
                <label htmlFor="interests">Interests: </label>
                <br />
                <input className="form-control" type="text" name="interests" ref="interests" placeholder="Interests" /> 
              </div>   
              <div className="form-group">
                <label htmlFor="about_text">About: </label>
                <br />
                <input className="form-control" type="text" name="about_text" ref="about_text" placeholder="About" /> 
              </div> 

              <div className="row">
                <div className="col-md-12 text-center">
                  <a href={"/login"}>
                    <input id="register_button" 
                         className="btn btn-default center-block" 
                         type="submit" 
                         value="Register"
                         onClick={this.createUser} />
                  </a>
                </div>
              </div>
            </form>
          </Panel>
        </div>
      </div>
		);
	}
});

render(<RegisterPage />, document.getElementById("root"));
