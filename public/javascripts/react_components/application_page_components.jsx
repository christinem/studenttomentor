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

        <div className="col-md-12 text-center">
          <Panel id="application_info" title="Application Information">
            <div className="row">
              <div id="application_information" className="col-md-12 text-center">
                <Panel title="Expected Graduation Date">
                  {/* Date picker reference: https://eonasdan.github.io/bootstrap-datetimepicker/*/}
                  <div className="container">
                    <div className="row">
                        <div className='col-sm-6'>
                            <div className="form-group">
                                <div className='input-group date' id='datetimepicker1'>
                                    <input type='text' className="form-control" />
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Panel> 
              </div>
              <div className="col-md-12 text-center">
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