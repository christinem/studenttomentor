import React from "react";

export var NavBar = React.createClass({
  getInitialState: function() {
    return {
      user: null
    }
  },

  componentWillMount: function() {
    var that = this;

    if (typeof current_user !== "undefined") {
      this.setState({user: current_user});
    }
  },

  renderAdminOptions: function() {
    return (
      <ul className="nav navbar-nav">
        <li><a href={"/user/" +  this.state.user.id + "/homepage/"}>Home</a></li>
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">Applications
          <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href={"/user/" + this.state.user.id + "/view_all/applications"}>View All Applications</a></li>
          </ul>
        </li>
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">Profiles
          <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href={"/user/" + this.state.user.id + "/view_all/users"}>View All Profiles</a></li>
          </ul>
        </li>
        <li><a href={"/user/" + this.state.user.id + "/search"}>Advanced Search</a></li> 
      </ul>
        
    );
  },

  renderNonAdminOptions: function() {
    return (
      <ul className="nav navbar-nav">
        <li><a href={"/user/" +  this.state.user.id + "/homepage/"}>Home</a></li>
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">Applications
          <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href={"/user/" + this.state.user.id + "/application_page"}>Create a New Application</a></li>
          </ul>
        </li>
        <li><a href={"/user/" + this.state.user.id + "/search"}>Advanced Search</a></li> 
      </ul>
    );
  },

  renderLeftColumn: function() {
    var options = "";
    if (this.state.user) {
      if (this.state.user.type_of_user == "a") {
        options = this.renderAdminOptions();
      } else {
        options = this.renderNonAdminOptions();
      }
    }

    if (this.state.user) {
      return (
        <div>
          {options}
        </div>
      );
    } else {
      return(
        <ul className="nav navbar-nav">
          <li><a href={"/login"}>Log In</a></li>
          <li><a href={"/register"}>Register</a></li>
        </ul>
      );
    }
  },

  renderRightColumn: function() {
    if (this.state.user) {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li><a href={"/user/" + this.state.user.id + "/profile_page/" + this.state.user.id}>
            <span className="glyphicon glyphicon-user"></span> Profile Page
          </a></li>
          <li><a href="/logout">
            <span className="glyphicon glyphicon-log-in"></span> Log Out
          </a></li>
        </ul>
      )
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
        <div id={this.props.id} className="panel-body">
          {this.props.children}
        </div>
      </div>
    )
  }
});
