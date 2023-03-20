import React from "react";

export default function ARCStickyNav () {
  document.querySelector(".sticky-wrapper").style.display='none';
  return (

    // grab all instances of the sticky nav items
    // grab the cta

    // put them into the arccorp-vars stickynav
    <p>Hello</p>
  )
}

// pull from the current stickynav -- 
// Need to put something for the page title -- like Fraud Prevention
// sticky-nav__linkItem - for the sticky links
// sticky-nav__ctaItem - for CTA on the right side
//     grab the href from a and the inner text and the icon
// Change the color of the text

// Ideals... 
// One thing to integrate and it will work for all pages
// can hide the current sticky and replace it with the stickynav from the arccorp-vars

// Need: 
// Every page title to have the same classname
// Every page sticky nav link to have the same classname

// hide the current stickynav: 
// document.querySelector(".sticky-wrapper").style.display='none';



function stickynav() {
  $(document).ready(function () {
    document.querySelector(".sticky-wrapper").style.display='none';
    // var stickyExists = $(".sticky-wrapper").length > 0;
    // console.log("hello from sticky" + stickyExists);
    // if (stickyExists) {
    //   $(".supernav").css("border-bottom", "none");
    //   var sticky = $(".sticky-wrapper").html();
    //   $(".sticky-wrapper").remove();
    //   // Moves sticky to be after navcontainer
    //   $(".navcontainer").after('<div class="sticky-wrapper arc-legacy-stickynav">' + sticky + '</div>');
    //   // Shows sticky
    //   $(".arc-legacy-stickynav").show();

    //   // Checks to see if its a product
    //   var isProduct = $(location).attr("href").includes("product");
    //   console.log(isProduct)
    //   if (isProduct) {
    //     var product;
    //     if ($("h2.block-header").html().includes("ADXMI")) {
    //       product = "ADXMI";
    //     } else if ($("h2.block-header").html().includes("ODSS")) {
    //       product = "ODSS";
    //     } else if (
    //       $("h2.block-header")
    //         .html()
    //         .includes("ARC's IRS 1099 Processing Service")
    //     ) {
    //       product = "IRS 1099 Processing Service";
    //     } else {
    //       product = $("h2.block-header").html();
    //       console.log(product)
    //     }
    //     console.log("Product: " + product);

    //     $(".sticky-nav__linksList").before(
    //       "<div class='sticky-nav__Branding'><img src='https://www2.arccorp.com/globalassets/arc-logos/corporate-logos/arc-logo-s-white.png' alt='ARC Logo' class='sticky-nav__arcLogo'><div class='sticky-nav__Productname'>" +
    //         product +
    //         "</div></div>"
    //     );
    //   }

    //   else {
    //     var title = $(".mainTitle").html();
    //     console.log(title);

    //     $(".sticky-nav__linksList").before(
    //       "<div class='sticky-nav__Branding'><div class='sticky-nav__PageTitle'>" +
    //         title +
    //         "</div></div>"
    //     );
    //   }
    // }
  });
}

stickynav();