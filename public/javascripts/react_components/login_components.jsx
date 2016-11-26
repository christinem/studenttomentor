import React from "react";
import { render } from "react-dom";
import {NavBar, Panel} from "./common_components.jsx";

var LoginPage = React.createClass({
  render: function() {
    return(
      <div>
        <NavBar />

        <div className="page-header">
          <h1 className="title"> Welcome to StudentToMentor! </h1>
        </div>

        <LoginForm />
      </div>
    );
  }
});

var LoginForm = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-md-4 col-md-offset-4">
          <Panel title="Login">
            <form id="login_form" action="/login" method="post">
              <p> Email: </p> <input type="text" name="username" placeholder="Email" />
              <p> Password: </p> <input type="password" name="password" placeholder="Password" />
              <input id="login_button" 
                     className="btn btn-default center-block" 
                     type="submit" 
                     value="Login" />
            </form>
          </Panel>
        </div>
      </div>
    );
  }
});

render(<LoginPage />, document.getElementById("root"));