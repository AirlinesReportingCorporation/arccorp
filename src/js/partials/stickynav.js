function stickynav() {
  var stickyExists = $(".sticky-wrapper").length > 0;

  if (stickyExists) {
    $(document).ready(function () {
      var sticky = $(".sticky-wrapper");
      // Moves sticky to be after navcontainer
      $(sticky).insertAfter(".navcontainer");
      // Shows sticky
      $(sticky).show();


      // Checks to see if its a product
      var isProduct = $(location).attr("href").includes("products");
      if (isProduct) {
        var product;
        if ($("h2.block-header").html().includes("ADXMI")) {
          product = "ADXMI";
        } else if ($("h2.block-header").html().includes("ODSS")) {
          product = "ODSS";
        } else if (
          $("h2.block-header")
            .html()
            .includes("ARC's IRS 1099 Processing Service")
        ) {
          product = "IRS 1099 Processing Service";
        } else {
          product = $("h2.block-header").html();
        }
        console.log("Product: " + product);

        $(".sticky-nav__linksList").before(
          "<div class='sticky-nav__Branding'><img src='https://www2.arccorp.com/globalassets/arc-logos/corporate-logos/arc-logo-s-white.png' alt='ARC Logo' class='sticky-nav__arcLogo'><div class='sticky-nav__Productname'>" +
            product +
            "</div></div>"
        );
      }
    });
  }
}

stickynav();
