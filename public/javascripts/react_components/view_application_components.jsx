'use strict';

import React from "react";
import { render } from "react-dom";
import {NavBar, Panel} from "./common_components.jsx";

var ApplicationPage = React.createClass({
  render: function() {
    return(
      <div>
        <NavBar />

        <div className="page-header">
          <h1 className="title"> Application Page </h1>
        </div>

        <div className="col-md-4 text-center">

        </div>
        <div className="col-md-8 text-center">
          <Panel id="application_info" title="Application Information">
            <div className="row">
              <div id="application_information" className="col-md-6 text-center">
                <Panel title="Expected Graduation Date">
                  {application.expected_grad}
                </Panel> 
              </div>
              <div className="col-md-6 text-center">
                <Panel id="past_participation" title="Have you been part of the mentorship program in the past?"> </Panel>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 text-center">
                <Panel id="why_interested" title="Why are you interested in the mentorship program"> 
                   <input type="text" className="form-control" placeholder="Year" aria-describedby="basic-addon1">
                    </input>
                </Panel>
              </div>
            </div>
          </Panel>
          
        </div>
      </div>
    );
  }
});


render(<ApplicationPage />, document.getElementById("root"));
