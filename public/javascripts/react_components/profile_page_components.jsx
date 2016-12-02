import React from "react";
import { render } from "react-dom";
import {NavBar, Panel} from "./common_components.jsx";

var ProfilePage = React.createClass({
  renderExtraPersonalInformation: function(type) {
    if (type == "m") {
      return (
         <div className="list-group-item"> 
          <b>Gender:</b> {user.gender} 
        </div> 
      );
    } else if (type == "s") {
      return(
        <div>
          <div className="list-group-item"> 
            <b>Gender:</b> {user.gender} 
          </div> 
          <div className="list-group-item"> 
            <b>Student Number:</b> {user.student_number} 
          </div> 
        </div>
      );
    }
  },

  deleteUser: function() {
    if (user.type_of_user == "m") {
      var url = "/users/mentors?id=" + user.id;
    } else if (user.type_of_user == "s") {
      var url = "/users/students?id=" + user.id;
    }

    $.ajax({
      url: url,
      type: "DELETE",
      dataType: "text"
    });
  },

  render: function() {
    var interests = [];
    var personalInfoClass = "col-md-12 text-center";
    if ((user.type_of_user == "m") || (user.type_of_user == "s")) {
      var interests_panel = <div className="col-md-6 text-center">
                              <Panel id="interests" title="Interests"> 
                                {interests.map(function(interest) {
                                  return(
                                    <div className="list-group-item"> 
                                      {interest} 
                                    </div> 
                                  );
                                })}
                              </Panel>
                            </div>;
      var about_me_panel =  <div className="row">
                              <div className="col-md-12 text-center">
                                <Panel id="about_me" title="About Me"> 
                                  {user.about_text} 
                                </Panel>
                              </div>
                            </div>;
      personalInfoClass = "col-md-6 text-center";
    }

    if ((current_user.type_of_user == "a") || (user.id == current_user.id)) {
      var edit_div = 
                <a href={"/user/" + current_user.id + "/edit_profile_page/" + user.id} 
                   className="btn btn-default" 
                   role="button"> Edit Profile
                </a>;
    }

    if ((current_user.type_of_user == "a") && (user.id != current_user.id)) {
       var delete_div = 
                <a href={"/user/" + current_user.id + "/homepage"} 
                           className="btn btn-default" 
                           role="button"
                           onClick={this.deleteUser}> Delete Profile
                </a>;
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
              <div id="personal_information" className={personalInfoClass}>
                <Panel id="personal_info" title="Personal Information">
                  <ul className="list-group"> 
                    <div className="list-group-item"> 
                      <b>First Name:</b> {user.first_name}
                    </div>
                    <div className="list-group-item">
                      <b>Last Name:</b> {user.last_name} 
                    </div> 
                    <div className="list-group-item"> 
                      <b>Email:</b> {user.email} 
                    </div> 
                    {this.renderExtraPersonalInformation(user.type_of_user)}
                  </ul>
                </Panel> 
              </div>
              {interests_panel}
            </div>

            {about_me_panel}

             <div className="row">
              {edit_div}
              {delete_div}
            </div>
          </Panel>
          
        </div>
      </div>
    );
  }
});



render(<ProfilePage />, document.getElementById("root"));