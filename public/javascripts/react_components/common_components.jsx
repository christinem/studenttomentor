import React from "react";

export var NavBar = React.createClass({
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

  renderLeftColumn: function() {
    if (this.state.loggedIn) {
      return (
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
      );
    } else {
      return("");
    }
  },

  renderRightColumn: function() {
    if (this.state.loggedIn) {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/profile_page">
            <span className="glyphicon glyphicon-user"></span> Profile Page
          </a></li>
          <li><a href="/logout">
            <span className="glyphicon glyphicon-log-in"></span> Log Out
          </a></li>;
        </ul>
      );
    } else {
      return("");
    }
  },

  render: function() {
    return (
      <div>
        {/* Nav bar styling adapted from http://www.w3schools.com/bootstrap/bootstrap_navbar.asp */} 
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">StudentToMentor </a>
            </div>
            {this.renderLeftColumn()}
            {this.renderRightColumn()}
          </div>
        </nav>
      </div>
    );
  }
});

export var Panel = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.title}</h3>
        </div>
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    )
  }
});
