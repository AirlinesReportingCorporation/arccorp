import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import Apphome from "./apphome.jsx";
import Footer from "./components/Footer";

var mountNode = document.getElementById("home-app");
var footerNode = document.getElementById("arc-footer");

ReactDOM.render(<Apphome />, mountNode);
ReactDOM.render(<Footer />, footerNode);
