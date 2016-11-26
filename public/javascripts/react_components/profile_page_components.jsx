import React from "react";
import { render } from "react-dom";
import {NavBar, Panel} from "./common_components.jsx";

var ProfilePage = React.createClass({
  render: function() {
    return(
      <div>
        <NavBar />

        <div className="page-header title">
          <h1> Profile Page: </h1>
        </div>

      </div>
    );
  }
});

render(<ProfilePage />, document.getElementById("root"));