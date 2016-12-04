'use strict';

import React from "react";
import { render } from "react-dom";
import {NavBar, Panel} from "./common_components.jsx";

var ApplicationPage = React.createClass({
 createApp: function() {
    let url = "/applications";
    let current_year = new Date().getFullYear();
    let past_participation = $("#yes_radio")[0].checked;

    let data = {
      expected_grad: $("#expected_grad").val(),
      past_participation: past_participation,
      why_interested: $("#why_interested").val(),
      mentor_prefs: $("#mentor_prefs").val(),
      year: current_year,
      uID: current_user.id 
    };

    $.ajax({
      url: url,
      type: "POST",
      contentType:"application/json",
      data: JSON.stringify(data),
      dataType:"text", 
    });
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
                  <div className="list-group-item"> 
                    <input type="text" id="expected_grad" placeholder="MM/YYYY" />      
                  </div> 
                </Panel> 
              </div>
              <div className="col-md-12 text-center">
                <Panel id="past_participation" title="Have you been part of the mentorship program in the past?">
                  <label className="radio-inline"><input id="yes_radio" type="radio" name="optradio"/>Yes</label>
                  <label className="radio-inline"><input id="no_radio" type="radio" name="optradio"/>No</label>
                </Panel>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 text-center">
                <Panel title="Why are you interested in the mentorship program?"> 
                  <textarea className="form-control" rows="5" id="why_interested"></textarea>
                </Panel>
              </div>
            </div>

             <div className="row">
              <div className="col-md-12 text-center">
                <Panel title="Do you have any preferences for mentors?"> 
                    <textarea className="form-control" rows="3" id="mentor_prefs"></textarea>
                </Panel>
              </div>
            </div>
          
        </div>
        <div className="row">
        <div className="col-md-12 text-center">
        <a href={"/user/" + current_user.id + "/homepage/"} 
                 className="btn btn-default" 
                 role="button"
                 onClick={this.createApp}> Submit
              </a>
        </div>
        </div>
      </div>
    );
  }
});



render(<ApplicationPage />, document.getElementById("root"));