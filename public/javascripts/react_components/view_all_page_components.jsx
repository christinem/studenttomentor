import React from "react";
import {render} from "react-dom";
import {NavBar, Panel} from "./common_components.jsx";

var ViewAllPage = React.createClass({
  render: function() {
    return (
      <div>
        <NavBar />

        <div className="container">
          <div id="search_column" className="col-md-12 text-left">
            <Panel id="view_all" title="View All">
              {data.map(function(data_item) {
                return (
                  <ul className="list-group">
                    {Object.keys(data_item).map(function(key) {
                        return <li className="list-group-item">{key}: {data_item[key]}</li>;
                    })}
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
