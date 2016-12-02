import React from "react";
import {render} from "react-dom";
import {NavBar, Panel} from "./common_components.jsx";

var ViewAllPage = React.createClass({
  getInitialState: function() {
    return {
      data: []
    }
  },

  componentDidMount: function() {
    var new_data = []
    data.map(function(obj) {
      var new_object = {}
      Object.keys(obj).map(function(key) {
        if (key == "id") {
          new_object["ID"] = obj[key];
        }
        // User Keys
        if (key == "first_name") {
          new_object["First Name"] = obj[key];
        } else if (key == "last_name") {
          new_object["Last Name"] = obj[key];
        } else if (key == "email") {
          new_object["Email"] = obj[key];
        // Application Keys
        } else if (key == "expected_grad") {
           new_object["Application #"] = obj["id"];
        }
      });

      new_data.push(new_object);
    });
    
    this.setState({data: new_data});
  },

  render: function() {
    // checking if we're viewing users or not
    if (data[0]["first_name"] != undefined) {
      var href = "/user/" + current_user.id + "/profile_page/"
    } else {
      var href = "/user/" + current_user.id + "/view_application_page/"
    }

    return (
      <div>
        <NavBar />

        <div className="container">
          <div id="search_column" className="col-md-12 text-left">
            <Panel id="view_all" title="View All">
              {this.state.data.map(function(data_item) {
                return (
                  <ul className="list-group">
                    {Object.keys(data_item).map(function(key) {
                        return <li className="list-group-item">{key}: {data_item[key]}</li>;
                    })}
                    <li className="list-group-item">
                      <a className="btn btn-default" role="button"
                         href={href + data_item["ID"]}>View </a>
                    </li>
                  </ul>
                )
              })}
            </Panel>
          </div>
        </div>
      </div>
    );
  }
});

render(<ViewAllPage/>, document.getElementById("root"));
