import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";

import { Stickynav } from "arccorp-vars";

export default function mountsticky() {
  $(document).ready(function() {
    var stickyExists = $(".sticky-wrapper").length > 0;

    if (stickyExists) {
      //get the data-sticky-id. for each, grab the value. on that same element, add an id with that value

      $("[data-sticky-id]").each(function() {
        var value = $(this).attr("data-sticky-id");
        $(this).attr("id", value);
      });
      
      let titleExists = document.getElementsByTagName("h1").length > 0;
      let pageTitle = "";
      let currPage = $(location).attr("href");

      currPage.indexOf("/products/") > 0 && titleExists
        ? (pageTitle = document.getElementsByTagName("h1")[0].innerText)
        : (pageTitle = "");

      let pageLinks = document.querySelectorAll(".sticky-nav__link");

      let links = [];

      $(".sticky-nav__linkItem").each(function() {
        const newLink = {
          url: $(this).find("a").attr("href"),
          title: $(this).find("a").text()
        };
        links.push(newLink);
      });

      let ctaLink = document.querySelector(".ctaLink").href;
      let ctaName = document.querySelector(".ctaLink").innerText;

      $(".navcontainer").after("<div id='stickynav-app'></div>");
      var appNode = document.getElementById("stickynav-app");
      appNode.style.position = "relative";
      appNode.style.height = "auto";
      ReactDOM.render(
        <Stickynav
          links={links}
          title={pageTitle}
          contactUs={ctaName}
          rightLink={ctaLink}
        />,
        appNode
      );
      $(".arc-sticky-container").unwrap();
      if (pageTitle == "") {
        document.querySelector(".arc-sticky-brand").style.display = "none";
        $(".arc-sticky-links").css("marginLeft", "0");
      }
    }
  });
}
