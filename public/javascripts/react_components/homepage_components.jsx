import React from "react";
import { render } from "react-dom";
import {NavBar, Panel} from "./common_components.jsx";

/* Alot of the styling on this page was taken from provided examples from bootstrap website:
  http://getbootstrap.com/components/ */

var HomePage = React.createClass({
  getInitialState: function() {
    return {
      applications: []
    }
  },

  componentDidMount: function() {
    var that = this;
    $.getJSON("/applications?uID=" + current_user.id, function(applications) {
      that.setState({applications: applications});
    });
  },

  renderStudentDashboard: function() {
    if(this.state.applications) {
       var applications = this.state.applications
    }

    return(
      <div>
        <NavBar />

        <div className="page-header">
          <h1 className="title"> Your Dashboard </h1>
        </div>
        
        <div className="container">
          <div className="col-md-6 text-center"> 
            <Panel id="current_application" title="Current Applications">
                <div>
                  <p>Click on existing applications to view their status:</p>
                  <ul className="list-group">
                    {applications.map(function(application) {
                      return (<a href={"/user/" + current_user.id + "/view_application_page/" + application.id} 
                        className="list-group-item"> {"Application " + application.id}</a>);
                    })}
                  </ul>
                </div>
            </Panel>
            
            <Panel title="New Application">
              <div>
                <p>Click here to create a new application</p>
               <a href={"/user/" + current_user.id + "/application_page"} className="btn btn-default" role="button">New Application</a>
              </div>
            </Panel>
          </div>

          <div className="col-md-6 text-center"> 
            <Panel id="profile_search" title="Profile Search" ref="panelBody">
              <div>
                <p>Enter keywords below to perform a profile quick search:</p>
                <SearchBar />

                <p>Or click here to perform an advanced search</p>
                <a href={"/user/" + current_user.id + "/search"} className="btn btn-default" role="button">Advanced Search</a>
              </div>
            </Panel>

            <Panel title="Edit Profile">
              <div>
                <p>Click here to edit your profile</p>
                <a href={"/user/" + current_user.id + "/edit_profile_page/" + current_user.id} className="btn btn-default" role="button">Edit Profile</a>
              </div>
            </Panel>
          </div>
        </div>
      </div>
    );
  },

  renderAdminDashboard: function() {
    return(
      <div> 
        <NavBar />

        <div className="page-header">
          <h1 className="title"> Your Dashboard </h1>
        </div>

        <div className="container">
          <div className = "row">        
            <div className="col-md-6 text-center"> 
                <Panel title="Profile Search" ref="panelBody">
                  <div>
                    <p>Enter keywords below to perform a profile quick search:</p>
                    <SearchBar />

                    <p>Or click here to perform an advanced search</p>
                    <button type="button" className="btn btn-default">Advanced Search</button>
                  </div>
                </Panel>

                 <Panel title="View All Profiles">
                  <div>
                    <p>Click here to view all Profiles</p>
                    <a href="#" className="btn btn-default" role="button">View all Profiles</a>
                  </div>
                </Panel>
            </div>

            <div className="col-md-6 text-center"> 
                <Panel title="Application Search" ref="panelBody">
                  <div>
                    <p>Enter keywords below to perform an application quick search:</p>
                    <SearchBar />

                    <p>Or click here to perform an advanced search</p>
                    <button type="button" className="btn btn-default">Advanced Search</button>
                  </div>
                </Panel>

                <Panel title="View All Applications">
                  <div>
                    <p>Click here to view all Applications</p>
                    <a href="#" className="btn btn-default" role="button">View all Applications</a>
                  </div>
                </Panel>
            </div>
          </div>

          <div className = "row">      
            <div className="col-md-4 col-md-offset-4 text-center">
              <Panel title="Edit Profile">
                <div>
                  <p>Click here to edit your profile</p>
                  <a href={"/edit_profile_page/" + current_user.id} className="btn btn-default" role="button">Edit Profile</a>
                </div>
              </Panel>
            </div>
          </div>
        </div>
      </div>
    );
  },

  render: function() {
    if (current_user.type_of_user == "a") {
      return(
        <div>
          {this.renderAdminDashboard()}
        </div>
      )
    } else {
      return(
        <div>
          {this.renderStudentDashboard()}
        </div>
      )
    }
  }
});

var SearchBar = React.createClass({
  render: function() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search for..." />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button">Go!</button>
        </span>
      </div>
    );
  }
});

render(<HomePage />, document.getElementById("root"));