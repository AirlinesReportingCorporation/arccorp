import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "core-js/stable";

import "./index.scss";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Stickynav,
  ProductJumbo,
  ProductText,
  ProductQuote,
  ProductCallout,
  ProductLinks,
} from "arccorp-vars";

function AgencyBI() {
  return <div>asdf</div>;
}

export default AgencyBI;

var mountNode = document.getElementById("product-app");

ReactDOM.render(<AgencyBI />, mountNode);
