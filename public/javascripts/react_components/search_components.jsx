import React from "react";
import {render} from "react-dom";
import {NavBar, Panel} from "./common_components.jsx";

var SearchPage = React.createClass({

<<<<<<< HEAD
	getInitialState: function() {
		return {
			submitted: false,
			users: "",
			type: ""
		}
	},
=======
  getInitialState: function() {
    return {
      submitted: false,
      users: ""
    }
  },
>>>>>>> upstream/master

  onSubmit: function(event) {
    event.preventDefault();

    var formData = {
      first_name: this.refs.fname.value,
      last_name: this.refs.lname.value,
      student_number: this.refs.stunum.value,
      email: this.refs.email.value,
      interest: this.refs.interest.value,
    };

    if (this.state.type == "s") {
    	$.get("/users/students", function (data) {
        this.setState({submitted: true, users: data}, function() {
          this.filterUsers(formData);
        });
        document.getElementById("user_panel").scrollIntoView();
<<<<<<< HEAD
    	}.bind(this));
		} else if (this.state.type == "m") {
			$.get("/users/mentors", function (data) {
        this.setState({submitted: true, users: data}, function() {
        	this.filterUsers(formData);
        });
        document.getElementById("user_panel").scrollIntoView();
    	}.bind(this));
		} else if (this.state.type == "a") {
			$.get("/users/admins", function (data) {
        this.setState({submitted: true, users: data}, function() {
        	this.filterUsers(formData);
        });
        document.getElementById("user_panel").scrollIntoView();
    	}.bind(this));
		}
	},

	filterUsers: function(formData) {

		let users = this.state.users;

		for (var key in formData) {
	    if (formData[key] && user.hasOwnProperty(key)) {
	    	users = users.filter(function (user) {

	    		if (key == "interest") {
	    			var queryArray = formData[key].split(";");
	    			for (var query of queryArray) {
	    				if (this.searchInterests(query, user["interests"])) {
	    					return true ;
	    				}
	    			}
	    			return false;

	    		} else {
    				return user[key].toString().toLowerCase() == formData[key].toString().toLowerCase();
    			}
	    	}.bind(this));
	    }
		}
=======
      }.bind(this)
    );
  },

  filterUsers: function(formData) {

    let users = this.state.users;

    for (var key in formData) {
      if (formData[key]) {
        users = users.filter(function (user) {

          if (key == "interest") {
            var queryArray = formData[key].split(";");
            for (var query of queryArray) {
              if (this.searchInterests(query, user["interests"])) {
                return true;
              }
            }
            return false;

          } else {
            return user[key].toString().toLowerCase() == formData[key].toString().toLowerCase();
          }
        }.bind(this));
      }
    }
>>>>>>> upstream/master

    this.setState({users: users});
  },

<<<<<<< HEAD
	changeUserType: function(event) {
		this.setState({type: event.currentTarget.value});
	},

	searchInterests: function(query, userInterests) {
=======
  searchInterests: function(query, userInterests) {
>>>>>>> upstream/master

    for (var i = 0; i < userInterests.length; i++) {
        if (userInterests[i].toLowerCase() == query.toLowerCase()) {
            return true;
        }
    }

    return false;
<<<<<<< HEAD
	},

	render: function() {

		var filtered = [];
		var interests = "";

		for (var user of this.state.users) {
			if (user.interests) {
				interests = user.interests.toString();
			} else {
				interests = "N/A";
			}

			var arr = [];
			arr.push(<li className="list-group-item">First Name: {user.first_name}</li>);
			arr.push(<li className="list-group-item">Last Name: {user.last_name}</li>);
			arr.push(<li className="list-group-item">Student Number: {user.student_number}</li>);
			arr.push(<li className="list-group-item">Email: {user.email}</li>);
			arr.push(<li className="list-group-item">Interests: {interests}</li>);
			arr.push(<li className="list-group-item">About: {user.about_text}</li>);
			arr.push(<a className="list-group-item" href="">View Profile</a>);
			filtered.push(<ul>{arr}</ul>);
			filtered.push(<br />);
		}

		if (this.state.submitted) {
    	var userList = <Panel id="user_list" title="Search Results">
    								   {filtered}
                     </Panel>;
    }

		return (
			<div>
				<NavBar />

				<div className="container">
	        <div id="search_column" className="col-md-12 text-left">
	        	<Panel id="advanced_search" title="Advanced Search">
		        	<form id="search_form" action="" onSubmit={this.onSubmit}>
		        		<div className="col-md-6 text-left">
				          <div className="form-group">
				            <label htmlFor="fname">First Name</label>
				            <input className="form-control" name="fname" ref="fname" placeholder="John" pattern="\D+" title="Must not contain digits. Case insensitive." />
				          </div>
				          <div className="form-group">
				            <label htmlFor="stunum">Student Number</label>
				            <input className="form-control" name="stunum" ref="stunum" placeholder="123456789" pattern="\d{9}(\d{1})?" title="Must contain 9 or 10 digits." />
				          </div>
				          <div className="form-group">
				            <label htmlFor="interest">Interest</label>
				            <input className="form-control" name="interest" ref="interest" placeholder="To search for multiple interests, use a semicolon (without whitespace) as delimiter" />
					        </div>
				        </div>
		        		<div className="col-md-6 text-left">
		        			<div className="form-group">
				            <label htmlFor="lname">Last Name</label>
				            <input className="form-control" name="lname" ref="lname" placeholder="Smith" pattern="\D+" title="Must not contain digits. Case insensitive." />
				          </div>
				          <div className="form-group">
				            <label htmlFor="email">Email</label>
				            <input className="form-control" name="email" ref="email" placeholder="example_123@example.com" pattern="[\w\.]+@[A-Za-z]+\.[A-Za-z]+" title="Please match the format of the example email." />
				          </div>
				          <div className="form-group">
									  <label htmlFor="usertype">User Type:</label>
									  <br />
									  <label className="radio-inline"><input type="radio" name="usertype" value="s" onChange={this.changeUserType} />&nbsp;Student&nbsp;&nbsp;&nbsp;&nbsp;</label>
										<label className="radio-inline"><input type="radio" name="usertype" value="m" onChange={this.changeUserType} />&nbsp;Mentor&nbsp;&nbsp;&nbsp;&nbsp;</label>
										<label className="radio-inline"><input type="radio" name="usertype" value="a" onChange={this.changeUserType} />&nbsp;Administrator</label>
									</div>
		        		</div>
		        		<br />
		        		<div className="col-md-12 text-center">
			        		<input id="search_button" 
		                     className="btn btn-default center-block" 
		                     type="submit" 
		                     value="Search" />
		            </div>
	        		</form>
	        	</Panel>
	        	<div id="user_panel">
	        		{userList}
	        	</div>
	        </div>
	      </div>
	    </div>
=======
  },

  render: function() {

    var filtered = [];

    for (var user of this.state.users) {
      var arr = [];
      arr.push(<li className="list-group-item">First Name: {user.first_name}</li>);
      arr.push(<li className="list-group-item">Last Name: {user.last_name}</li>);
      arr.push(<li className="list-group-item">Student Number: {user.student_number}</li>);
      arr.push(<li className="list-group-item">Email: {user.email}</li>);
      arr.push(<li className="list-group-item">Interests: {user.interests.toString()}</li>);
      arr.push(<li className="list-group-item">About: {user.about_text}</li>);
      arr.push(<a className="btn btn-default" role="button" 
        href={"/user/" + current_user.id + "/profile_page/" + user.id}>View Profile</a>);
      filtered.push(<ul className="list-group">{arr}</ul>);
      filtered.push(<br />);
    }

    if (this.state.submitted) {
        var userList = <Panel id="user_list" title="Search Results">
                         {filtered}
                        </Panel>;
      }

    return (
      <div>
        <NavBar />

        <div className="container">
          <div id="search_column" className="col-md-12 text-center">
            <Panel id="advanced_search" title="Advanced Search">
              <form id="search_form" action="" onSubmit={this.onSubmit}>
                <div className="col-md-6 text-left">
                  <div className="form-group">
                    <label htmlFor="fname">First Name</label>
                    <input className="form-control" name="fname" ref="fname" placeholder="John" pattern="\D+" title="Must not contain digits. Case insensitive." />
                  </div>
                  <div className="form-group">
                    <label htmlFor="stunum">Student Number</label>
                    <input className="form-control" name="stunum" ref="stunum" placeholder="123456789" pattern="\d{9}(\d{1})?" title="Must contain 9 or 10 digits." />
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <div className="form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input className="form-control" name="lname" ref="lname" placeholder="Smith" pattern="\D+" title="Must not contain digits. Case insensitive." />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" name="email" ref="email" placeholder="example_123@example.com" pattern="[\w\.]+@[A-Za-z]+\.[A-Za-z]+" title="Please match the format of the example email." />
                  </div>
                </div>
                <div className="col-md-12 text-left">
                  <div className="form-group">
                    <label htmlFor="interest">Interest</label>
                    <input className="form-control" name="interest" ref="interest" placeholder="To search for multiple interests, use a semicolon (without whitespace) as delimiter" />
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
      </div>
>>>>>>> upstream/master
    );
  }
});

render(<SearchPage />, document.getElementById("root"));
