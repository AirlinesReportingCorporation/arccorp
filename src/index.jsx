import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import Apphome from "./apphome.jsx";
import MainNavigation from "./components/MainNavigation";

var mountNode = document.getElementById("home-app");

ReactDOM.render(<Apphome />, mountNode);


