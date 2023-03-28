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

    //get the data-sticky-id. for each, grab the value. on that same element, add an id with that value
    
    $("[data-sticky-id]").each(function(){
      var value = $(this).attr("data-sticky-id");
      console.log(value)
      $(this).attr("id", value)
      console.log(value)
    });



      let pageTitle = document.getElementsByTagName('h1')[0].innerText;
      console.log(pageTitle);
      let pageLinks = document.querySelectorAll(".sticky-nav__link");
      console.log(pageLinks);
      let links = [];
      pageLinks.forEach((pageLink) => {
        console.log(pageLink.href)
        const newLink = {
          url: '#' + pageLink.href.split("#")[1],
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
      appNode.style.position="relative";
      appNode.style.height="auto"
      ReactDOM.render(
        <Stickynav
          links={links}
          title={pageTitle}
          stickyCTA={ctaName}
          stickyCTALink={ctaLink}
        />,
        appNode
      );
      $(".arc-sticky-container").unwrap()
    }
  });
}

mountsticky();

//if stickyexsists, then add a new div elementid #stickynav
