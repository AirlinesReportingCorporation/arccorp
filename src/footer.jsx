import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";

var footerNode = document.getElementById("arc-footer");

ReactDOM.render(<Footer />, footerNode);
