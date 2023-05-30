//css imports
import "./css/main.scss";

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom";

const Apphome = lazy(() => import("./apphome"));
const Footer = lazy(() => import("./footer"));

var footerNode = document.getElementById("arc-footer");
var mountNode = document.getElementById("home-app");


ReactDOM.render(
  <Suspense
    fallback={
      <div className="loading-container">
        <div className="loading">
          <div className="loading-icon">
            <i className="fas fa-circle-notch fa-spin"></i>
          </div>
        </div>
      </div>
    }
  >
    <Apphome />
  </Suspense>,
  mountNode
);

ReactDOM.render(
  <Suspense
    fallback={
      <div className="loading-container">
        <div className="loading">
          <div className="loading-icon">
            <i className="fas fa-circle-notch fa-spin"></i>
          </div>
        </div>
      </div>
    }
  >
    <Footer />
  </Suspense>,
  footerNode
);