import React from "react";

export var NavBar = React.createClass({
  getInitialState: function() {
    return {
      user: null
    }
  },

  componentWillMount: function() {
    var that = this;

    if (typeof user !== "undefined") {
      this.setState({user: user});
    }
  },

  renderLeftColumn: function() {
    if (this.state.user) {
      return (
        <ul className="nav navbar-nav">
          <li><a href={"/homepage/" + this.state.user.id}>Home</a></li>
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">Applications
            <span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a href={"/application_page/" + this.state.user.id}>Create a New Application</a></li>
            </ul>
          </li>
          <li><a href={"/search/" + user.id}>Advanced Search</a></li> 
        </ul>
      );
    } else {
      return("");
    }
  },

  renderRightColumn: function() {
    if (this.state.user) {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li><a href={"/profile_page/" + this.state.user.id}>
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
        <div id={this.props.id} className="panel-body">
          {this.props.children}
        </div>
      </div>
    )
  }
});
