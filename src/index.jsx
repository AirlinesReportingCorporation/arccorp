import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "core-js/stable";

import React from "react";
import ReactDOM from "react-dom";
import Apphome from "./apphome.jsx";

var mountNode = document.getElementById("home-app");

ReactDOM.render(<Apphome />, mountNode);


