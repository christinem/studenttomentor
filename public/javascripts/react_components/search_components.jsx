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
        		<div className="col-md-6 text-left">
        			<div className="input-group">
	        			<p>First Name</p>
	        			<input type="text" className="form-control" placeholder="John" />
	        		</div>
	        		<div className="input-group">
	        			<p>Student Number</p>
	        			<input type="text" className="form-control" placeholder="123456789" />
	        		</div>
        		</div>
        		<div className="col-md-6 text-center">
        			<div className="input-group">
	        			<p>Last Name</p>
	        			<input type="text" className="form-control" placeholder="Smith" />
	        		</div>
	        		<div className="input-group">
	        			<p>Email</p>
	        			<input type="text" className="form-control" placeholder="example@example.com" />
	        		</div>
        		</div>
        		<button type="button" className="btn btn-default" onClick={this.props.onClick.bind(null, this)}>Search!</button>
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
