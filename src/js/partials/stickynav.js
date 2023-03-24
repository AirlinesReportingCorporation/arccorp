import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";

import { Stickynav } from "arccorp-vars";

function mountsticky() {
  $(document).ready(function() {
    document.querySelector(".sticky-wrapper").style.display = "none";
    var stickyExists = $(".sticky-wrapper").length > 0;

    if (stickyExists) {
      let pageTitle = document.querySelector(".mainTitle").innerText;
      console.log(pageTitle);
      let pageLinks = document.querySelectorAll(".sticky-nav__link");
      console.log(pageLinks);
      let links = [];
      pageLinks.forEach((pageLink) => {
        const newLink = {
          link: pageLink.href.split("#")[1],
          title: pageLink.innerText,
        };
        links.push(newLink);
      });
      console.log(links);
      let ctaLink = document.querySelector(".ctaLink").href;
      let ctaName = document.querySelector(".ctaLink").innerText;
      document.querySelector(".sticky-wrapper").style.display = "none";

      console.log("sticky exists");
      $(".navcontainer").after("<div id='stickynav-app'></div>");
      var appNode = document.getElementById("stickynav-app");
      ReactDOM.render(
        <Stickynav
          link={links}
          title={pageTitle}
          stickyCTA={ctaName}
          stickyCTALink={ctaLink}
        />,
        appNode
      );
    }
  });
}

mountsticky();

//if stickyexsists, then add a new div elementid #stickynav
