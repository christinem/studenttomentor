import React from "react";
import { render } from "react-dom";
import NavBar from "./common_components.jsx";

var HomePage = React.createClass({
	render: function() {
		return(
			<NavBar loggedIn={false}/>
		);
	}
});

render(<HomePage />, document.getElementById("nav_bar"));