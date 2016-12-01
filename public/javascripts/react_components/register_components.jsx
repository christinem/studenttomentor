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
      email: $("#email").val(),
      password: $("#password").val(),
      first_name: $("#first_name").val(),
      last_name: $("#last_name").val(),
      student_number: $("#student_number").val(),
      gender: $("#gender").val(),
      birthday: $("#birthday").val(),
      interests: [$("#interests").val()], 
      about_text: $("#about_text").val()
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
            <div className="list-group-item"> 
              <p> Email: </p> <input type="text" id="email" placeholder="example@example.com" />     
            </div> 
            <div className="list-group-item"> 
              <p> Password: </p> <input type="password" id="password" placeholder="password" />       
            </div> 
            <div className="list-group-item"> 
              <p> First Name: </p> <input type="text" id="first_name" placeholder="John" />         
            </div> 
            <div className="list-group-item"> 
              <p> Last Name: </p> <input type="text" id="last_name" placeholder="Appleseed" />
            </div> 
            <div className="list-group-item"> 
              <p> Student Number: </p> <input type="text" id="student_number" placeholder="123456789" />       
            </div> 
            <div className="list-group-item"> 
              <p> Gender: </p> 
              <select id="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div> 
            <div className="list-group-item"> 
               <p> Birthday: </p> <input type="text" id="birthday" placeholder="DD/MM/YYYY" />      
            </div> 
            <div className="list-group-item"> 
              <p> Interests: </p> <input type="text" id="interests" placeholder="Interests" />    
            </div> 
            <div className="list-group-item"> 
              <p> About: </p> <input type="text" id="about_text" placeholder="About" />
            </div> 

            <div className="row">
              <div className="col-md-12 text-center">
                <a href={"/login"} 
                   className="btn btn-default" 
                   role="button"
                   onClick={this.createUser}> Save
                </a>
              </div>
            </div>
          </Panel>
        </div>
      </div>
		);
	}
});

render(<RegisterPage />, document.getElementById("root"));
