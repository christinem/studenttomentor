import React from "react";
import { render } from "react-dom";
import {NavBar, Panel} from "./common_components.jsx";

var ProfilePage = React.createClass({
  registerUser: function() {
    var url = "/users/admins?id=" + user.id;
    var data = {
      first_name: $("#first_name").val(),
      last_name: $("#last_name").val(),
      about_text: $("#about_text").val(),
      birthday: $("#birthday").val(),
      email: $("email").val(),
      gender: "", 
      student_number: ""
    };

    if (user.type_of_user == "m") {
      data["gender"] = $("#gender").val();
      url = "/users/mentors?id=" + user.id;
    } else if (user.type_of_user == "s") {
      data["gender"] = $("#gender").val();
      data["student_number"] = $("#student_number").val();
      url = "/users/students?id=" + user.id;
    }

    $.ajax({
      url: url,
      type: "PUT",
      contentType:"application/json",
      data: JSON.stringify(data),
      dataType:"text", 
    });
  },

  renderExtraPersonalInformation: function(type) {
    if (type == "m") {
      return (
         <div className="list-group-item"> 
          <b>Gender:</b> 
          <input type="text" id="gender" className="form-control" 
                 defaultValue={user.gender} /> 
        </div> 
      );
    } else if (type == "s") {
      return(
        <div>
          <div className="list-group-item"> 
            <b>Gender:</b> 
            <input type="text" id="gender" className="form-control" 
                   defaultValue={user.gender} /> 
          </div> 
          <div className="list-group-item"> 
            <b>Student Number:</b>
            <input type="text" id="student_number" className="form-control" 
                   defaultValue={user.student_number} /> 
          </div> 
        </div>
      );
    }
  },

  render: function() {
    var interests = [];
    if (user.interests) {
      interests = user.interests;
    }

    return(
      <div>
        <NavBar />

        <div className="page-header">
          <h1 className="title"> Profile Page </h1>
        </div>

        <div className="col-md-4 text-center">
          <Panel id="profile_image" title="Profile Image">
          </Panel>
        </div>
        <div className="col-md-8 text-center">
          <Panel id="profile_info" title="Profile Information">
            <div className="row">
              <div id="personal_information" className="col-md-6 text-center">
                <Panel id="personal_info" title="Personal Information">
                  <ul className="list-group"> 
                    <div className="list-group-item"> 
                      <b>First Name:</b>  
                      <input type="text" id="first_name" className="form-control" 
                             defaultValue={user.first_name} /> 
                    </div>
                    <div className="list-group-item">
                      <b>Last Name:</b> 
                      <input type="text" id="last_name" className="form-control" 
                             defaultValue={user.last_name} /> 
                    </div> 
                    <div className="list-group-item"> 
                      <b>Email:</b> 
                      <input type="text" id="email" className="form-control" 
                             defaultValue={user.email} /> 
                    </div> 
                    {this.renderExtraPersonalInformation(user.type_of_user)}
                  </ul>
                </Panel> 
              </div>
              <div className="col-md-6 text-center">
                <Panel id="interests" title="Interests"> 
                  {interests.map(function(interest) {
                    return(
                      <div className="list-group-item"> 
                        {interest} 
                      </div> 
                    );
                  })}
                </Panel>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 text-center">
                <Panel id="about_me" title="About Me"> 
                  <input type="text" id="about_text" className="form-control" 
                         defaultValue={user.about_text} /> 
                </Panel>
              </div>
            </div>

            <div className="row">
              <a href={"/profile_page/" + user.id} 
                 className="btn btn-default" 
                 role="button"
                 onClick={this.registerUser}> Save
              </a>
            </div>
          </Panel>
          
        </div>
      </div>
    );
  }
});



render(<ProfilePage />, document.getElementById("root"));