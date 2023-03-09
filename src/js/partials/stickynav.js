function stickynav() {
  var stickyExists = $(".sticky-wrapper").length > 0;
  
  if (stickyExists) {
    console.log(stickyExists);
    $(document).ready(function() {
      var sticky = $(".sticky-wrapper");

      $(".navcontainer").after(sticky);
      $(".sticky-wrapper").show();

      var title;

      if (
        $("h2.block-header")
          .html()
          .includes("ADXMI")
      ) {
        title = "ADXMI";
      } else if (
        $("h2.block-header")
          .html()
          .includes("ODSS")
      ) {
        title = "ODSS";
      } else if (
        $("h2.block-header")
          .html()
          .includes("ARC's IRS 1099 Processing Service")
      ) {
        title = "IRS 1099 Processing Service";
      } else {
        title = $("h2.block-header").html();
      }
      console.log("Title: " + title);

      $(".sticky-nav__linksList").before(
        "<div class='sticky-nav__Branding'><img src='https://www2.arccorp.com/globalassets/arc-logos/corporate-logos/arc-logo-s-white.png' alt='ARC Logo' class='sticky-nav__arcLogo'><div class='sticky-nav__Productname'>" +
          title +
          "</div></div>"
      );
    });
  }
}

stickynav();
