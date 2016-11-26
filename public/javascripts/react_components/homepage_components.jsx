import React from "react";
import { render } from "react-dom";
import {NavBar, Panel} from "./common_components.jsx";

/* Alot of the styling on this page was taken from provided examples from bootstrap website:
  http://getbootstrap.com/components/ */

var HomePage = React.createClass({
  getApplications: function() {

  },

  render: function() {
    return(
      <div>
        <NavBar />
        <div className="container">
          <div id="applications_column" className="col-md-6 text-center"> 
            <Panel title="Current Applications">
                <div>
                  <p>Click on existing applications to view their status:</p>
                  <ul className="list-group">
                    <a href='#' className="list-group-item">Cras justo odio</a>
                    <a href='#' className="list-group-item">Cras justo odio</a>
                    <a href='#' className="list-group-item">Cras justo odio</a>
                  </ul>
                </div>
            </Panel>
            
            <Panel title="New Application">
              <div>
                <p>Click here to create a new application</p>
                <button type="button" className="btn btn-default">New Application</button>
              </div>
            </Panel>
          </div>

          <div id="profile_column" className="col-md-6 text-center"> 
            <Panel title="Profile Search" ref="panelBody">
              <div>
                <p>Enter keywords below to perform a profile quick search:</p>
                <SearchBar />

                <p>Or click here to perform an advanced search</p>
                <button type="button" className="btn btn-default">Advanced Search</button>
              </div>
            </Panel>

            <Panel title="Edit Profile" ref="panelBody">
              <div>
                <p>Click here to edit your profile</p>
                <a href="/profile_page" className="btn btn-default" role="button">Edit Profile</a>
              </div>
            </Panel>
          </div>
        </div>
      </div>

    );
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