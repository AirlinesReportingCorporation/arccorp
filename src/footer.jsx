import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";

var footerNode = document.getElementById("arc-footer");
var navNode = document.getElementById("arc-main-nav");

ReactDOM.render(<Footer />, footerNode);
ReactDOM.render(<MainNavigation />, navNode);
