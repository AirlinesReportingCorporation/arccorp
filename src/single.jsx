//css imports
import "./css/main.scss";

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import Apphome from "./apphome";
import Footer from "./components/Footer";

var footerNode = document.getElementById("arc-footer");
var mountNode = document.getElementById("home-app");

ReactDOM.render(<Apphome />, mountNode);

ReactDOM.render(<Footer />, footerNode);
