import React from "react";
import { render } from "react-dom";
import NavBar from "./common_components.jsx";

var LoginPage = React.createClass({
  render: function() {
    return(
      <div>
        <NavBar loggedIn={false}/>

        <div className="page-header">
          <h1 className="title"> Login: </h1>
        </div>

        <LoginForm />
      </div>
    );
  }
});

var LoginForm = React.createClass({

  render: function() {
    return (
      <form id="login_form" className="container" action="/login" method="post">
        <p> Email: </p> <input type="text" name="username" placeholder="Email" />
        <p> Password: </p> <input type="password" name="password" placeholder="Password" />
        <input id="login_button" 
               className="btn btn-default" 
               type="submit" 
               value="Login" />
      </form>
    );
  }
});

render(<LoginPage />, document.getElementById("root"));