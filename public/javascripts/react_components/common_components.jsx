import React from "react";

var NavBar = React.createClass({
  getInitialState: function() {
    return {
      loggedIn: false
    }
  },

  componentWillMount: function() {
    var that = this;
    $.getJSON("current_user", function(data) {
        if (data.hasOwnProperty("email")) {
            that.setState({loggedIn: true});
        }
    });
  },

  render: function() {

    if (this.state.loggedIn) {
      var logoutButton = <li><a href="/logout"><span className="glyphicon glyphicon-log-in"></span> Log Out</a></li>;
    } else {
      var logoutButton = "";
    }

    return (
      <div>
        {/* Nav bar styling adapted from http://www.w3schools.com/bootstrap/bootstrap_navbar.asp */} 
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">StudentToMentor </a>
            </div>
            <ul className="nav navbar-nav">
              <li><a href="/homepage">Home</a></li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Applications
                <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">View Current Applications</a></li>
                  <li><a href="#">Create a New Application</a></li>
                </ul>
              </li>
              <li><a href="#">Advanced Search</a></li> 
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#"><span className="glyphicon glyphicon-user"></span> Profile Page</a></li>
              {logoutButton}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
});

export default NavBar;
