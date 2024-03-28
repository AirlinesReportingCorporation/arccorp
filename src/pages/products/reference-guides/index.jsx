import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "core-js/stable";

import "./index.scss";

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Stickynav, ARCAccordion } from "arccorp-vars";

import { guides } from "./guide-info";

function ReferenceGuides() {

  const [isShowing, setShowing] = useState(false);

  useEffect(() => {
    let showing = isShowing;
    if (showing) {
      setShowing(true);
    }
    else {
      setShowing (false)
    }
  }, [isShowing])


  const toggleShow = () => {
    setShowing(!isShowing);
  };

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
              <div
              className="show-button"
              onClick={(toggleShow)}
            >
              {isShowing ? (
                <span className="guides-open">Collapse All</span>
              ) : (
                <span className="guides-close">Expand All</span>
              )}
            </div>
            {guides.map((guide, i) => {
              return (
                <ARCAccordion
                showing={isShowing}
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
