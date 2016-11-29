import React from "react";
import { render } from "react-dom";
import {NavBar, Panel} from "./common_components.jsx";

var SearchPage = React.createClass ({

	getInitialState: function() {
		return {
			listUsers: false
		}
	},

	onClick: function() {
		this.setState({listUsers: true});
	},

	render: function() {

		if (this.state.listUsers) {
			pageContents = <UserList />
		} else {
			pageContents = <SearchPanel onClick={this.onClick} />
		}

		return (
			<div>
				<NavBar />
				{pageContents}
			</div>
		);
	}
});

var SearchPanel = React.createClass({
	render: function() {
		return (
			<div className="container">
        <div id="search_column" className="col-md-12 text-center">
        	<Panel id="advanced_search" title="Advanced Search">
	        	<form id="register_form" action="/register" method="post">
	        		<div className="col-md-6 text-left">
	        			<p>First Name</p> <input type="text" className="form-control" placeholder="John" />
	        			<p>Student Number</p> <input type="text" className="form-control" placeholder="123456789" />
	        		</div>
	        		<div className="col-md-6 text-center">
	        			<p>Last Name</p> <input type="text" className="form-control" placeholder="Smith" />
	        			<p>Email</p> <input type="text" className="form-control" placeholder="example@example.com" />
	        		</div>
	        		<input id="register_button" 
                     className="btn btn-default center-block" 
                     type="submit" 
                     onClick={this.props.onClick.bind(null, this)}}
                     value="Register" />
        		</form>
        	</Panel>
        </div>
      </div>
    );
	}
});

var UserList = React.createClass({
	render: function() {
		return (

		);
	}
});

render(<SearchPage />, document.getElementById("root"));
