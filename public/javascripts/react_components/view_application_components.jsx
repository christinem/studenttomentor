'use strict';

import React from "react";
import { render } from "react-dom";
import {NavBar, Panel} from "./common_components.jsx";

var ApplicationPage = React.createClass({
  renderPastParticipation: function() {
    let pastParticipation = "Yes"
    if (!application.past_participation) {
      pastParticipation = "No"
    }

    return pastParticipation;
  },

  render: function() {
    return(
      <div>
        <NavBar />

        <div className="page-header">
          <h1 className="title"> Application Page </h1>
        </div>

        <div className="col-md-12 text-center">
  
            <div className="row">
              <div id="application_information" className="col-md-12 text-center">
                <Panel title="Expected Graduation Date">
                  {application.expected_grad}
                </Panel> 
              </div>
              <div className="col-md-12 text-center">
                <Panel id="past_participation" title="Have you been part of the mentorship program in the past?">
                  {this.renderPastParticipation()}
                </Panel>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 text-center">
                <Panel id="why_interested" title="Why are you interested in the mentorship program">
                  {application.why_interested}
                </Panel>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 text-center">
                <Panel title="Do you have any preferences for mentors?"> 
                  {application.mentor_prefs}
                </Panel>
              </div>
            </div>
          
        </div>
      </div>
    );
  }
});


render(<ApplicationPage />, document.getElementById("root"));
