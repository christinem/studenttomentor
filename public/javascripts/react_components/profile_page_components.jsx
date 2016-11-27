import React from "react";
import { render } from "react-dom";
import {NavBar, Panel} from "./common_components.jsx";

var ProfilePage = React.createClass({

  renderPersonalInformation: function() {
    $.getJSON("current_user", function(user) {
      var list_group = ' \
        <ul class="list-group"> \
          <div class="list-group-item"> \
            <b>First Name:</b> ' + user.first_name + ' \
          </div>\
          <div class="list-group-item">\
            <b>Last Name:</b> ' + user.last_name + ' \
          </div> \
          <div class="list-group-item"> \
            <b>Gender:</b> ' + user.gender + ' \
          </div> \
          <div class="list-group-item"> \
            <b>Email:</b> ' + user.email + ' \
          </div> \
        </ul>';

      $("#personal_info").append(list_group);
    });
  },

  renderAboutMe: function() {
    $.getJSON("current_user", function(user) {
      $("#about_me").append(user.about_text);
    });
  },

  render: function() {
    return(
      <div>
        <NavBar />

        <div className="page-header">
          <h1 className="title"> Profile Page </h1>
        </div>

        <div className="col-md-4 text-center">

        </div>
        <div className="col-md-8 text-center">
          <Panel id="profile_info" title="Profile Information">
            <div className="row">
              <div id="personal_information" className="col-md-6 text-center">
                <Panel id="personal_info" title="Personal Information">
                  {this.renderPersonalInformation()} 
                </Panel> 
              </div>
              <div className="col-md-6 text-center">
                <Panel id="interests" title="Interests"> </Panel>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 text-center">
                <Panel id="about_me" title="About Me"> 
                  {this.renderAboutMe()} 
                </Panel>
              </div>
            </div>
          </Panel>
          
        </div>
      </div>
    );
  }
});



render(<ProfilePage />, document.getElementById("root"));