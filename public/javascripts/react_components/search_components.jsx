import React from "react";
import {render} from "react-dom";
import {NavBar, Panel} from "./common_components.jsx";

var SearchPage = React.createClass({

	getInitialState: function() {
		return {
			submitted: false,
			users: "",
			filtered: ""
		}
	},

	onSubmit: function(event) {
		event.preventDefault();

    var formData = {
      first_name: this.refs.fname.value,
      last_name: this.refs.lname.value,
      student_number: this.refs.stunum.value,
      email: this.refs.email.value
    };

    $.get("/users/students", function (data) {
        this.setState({submitted: true, users: data}, function() {
        	this.filterUsers(formData);
        });
        document.getElementById("user_panel").scrollIntoView();
    	}.bind(this)
		);
	},

	filterUsers: function(formData) {

		let users = this.state.users;

		for (var key in formData) {
	    if (formData[key]) {
	    	users = users.filter(function (user) {
	    		return user[key] == formData[key];
	    	});
	    }
		}

		this.setState({users: users});
	},

	render: function() {

		var filtered = [];

		for (var user of this.state.users) {
			var arr = [];
			arr.push(<div className="firstName">First Name: {user.first_name}</div>);
			arr.push(<div className="lastName">Last Name: {user.last_name}</div>);
			arr.push(<div className="studentNumer">Student Number: {user.student_number}</div>);
			arr.push(<div className="email">Email: {user.email}</div>);
			arr.push(<div className="email">Interests: {user.interests.toString()}</div>);
			arr.push(<div className="about">About: {user.about_text}</div>);
			arr.push(<br />);
			filtered.push(arr);
		}

		if (this.state.submitted) {
    	var userList = <Panel id="user_list" title="Results">
    								   {filtered}
                     </Panel>;
    }

		return (
			<div className="container">
        <div id="search_column" className="col-md-12 text-center">
        	<Panel id="advanced_search" title="Advanced Search">
	        	<form id="search_form" action="" onSubmit={this.onSubmit}>
	        		<div className="col-md-6 text-left">
			          <div className="form-group">
			            <label htmlFor="fname">First Name</label>
			            <input className="form-control" name="fname" ref="fname" placeholder="John" pattern="[A-Za-z]+" />
			          </div>
			          <div className="form-group">
			            <label htmlFor="stunum">Student Number</label>
			            <input className="form-control" name="stunum" ref="stunum" placeholder="123456789" pattern="\d{9}(\d{1})?" />
			          </div>
			        </div>
	        		<div className="col-md-6 text-center">
	        			<div className="form-group">
			            <label htmlFor="lname">Last Name</label>
			            <input className="form-control" name="lname" ref="lname" placeholder="Smith" pattern="[A-Za-z]+" />
			          </div>
			          <div className="form-group">
			            <label htmlFor="email">Email</label>
			            <input className="form-control" name="email" ref="email" placeholder="example@example.com" pattern="\w+@[A-Za-z]+\.[A-Za-z]+"/>
			          </div>
	        		</div>
	        		<input id="register_button" 
                     className="btn btn-default center-block" 
                     type="submit" 
                     value="Search" />
        		</form>
        	</Panel>
        	<div id="user_panel">
        		{userList}
        	</div>
        </div>
      </div>
    );
	}
});

render(<SearchPage />, document.getElementById("root"));
