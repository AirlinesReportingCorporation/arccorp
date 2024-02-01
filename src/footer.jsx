import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "core-js/stable";

import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import MainNavigation from "./components/MainNavigation";


var footerNode = document.getElementById("arc-footer");
var navNode = document.getElementById("arc-main-nav");

ReactDOM.render(<Footer />, footerNode);
ReactDOM.render(<MainNavigation />, navNode);
