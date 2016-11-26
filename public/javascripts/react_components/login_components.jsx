import React from "react";
import { render } from "react-dom";
import NavBar from "./common_components.jsx";

var LoginPage = React.createClass({
  render: function() {
    return(
      <div>
        <NavBar loggedIn={false}/>

        <h1 className="title"> Login: </h1>

        <div id="login_form" className="container">
          <form>
            <p> Username: </p> <input type="text" name="username" />
            <p> Password: </p> <input type="text" name="password" />
            <input id="login_button" className="btn btn-default" type="submit" value="Login" />
          </form> 
        </div>
      </div>
    );
  }
});

render(<LoginPage />, document.getElementById("root"));