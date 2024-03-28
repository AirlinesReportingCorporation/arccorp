import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "core-js/stable";

import "./index.scss";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Stickynav, ARCAccordion } from "arccorp-vars";

import { guides } from "./guide-info";

function ReferenceGuides() {
  return (
    <div className="arc-reference-guides" style={{ paddingBottom: "90px" }}>
      <Stickynav title="Reference Guides" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="arc-reference-guides-top">
              <a
                style={{ textTransform: "uppercase" }}
                href="https://www2.arccorp.com/support-training/travel-agencies/Self-help-training/"
                title="SELF-PACED TRAINING"
                className="btn--link parentLink"
              >
                SELF-PACED TRAINING
              </a>
              <h1>Reference Guides</h1>
              <p className="byline">
                These following documents are available to assist with
                questions, specific information and to be used as guidelines.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {guides.map((guide, i) => {
              console.log(guide);
              return (
                <ARCAccordion
                  id={guide.id}
                  name={guide.name}
                  body={guide.body}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReferenceGuides;

var mountNode = document.getElementById("reference-guides-app");

ReactDOM.render(<ReferenceGuides />, mountNode);
