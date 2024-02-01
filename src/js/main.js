//css imports
import "../css/main.scss";

//js dependency imports
//import $ from "jquery";
import Vue from "vue";
import "owl.carousel";
import "jquery-validation";
import stickybits from "stickybits";
import LazyLoad from "vanilla-lazyload";
import mountsticky from "./partials/stickynav";

if ($(".owl-carousel").length) {
  $(".owl-carousel").owlCarousel({
    center: true,
    //autoplay: true,
    loop: true,
    nav: true,
    autoHeight: true,
    autoplayTimeout: 8000,
    autoplaySpeed: 2000,
    smartSpeed: 700,
    autoplayHoverPause: true,
    URLhashListener: true,
    autoplayHoverPause: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    navText: [
      '<img src="https://www2.arccorp.com/globalassets/homepage/redesign/latestArrowLeft.png">',
      '<img src="https://www2.arccorp.com/globalassets/homepage/redesign/latestArrowRight.png">',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
    onInitialize: function (element) {
      /* randomize carousel*/
      $(".owl-carousel")
        .children()
        .sort(function () {
          return Math.round(Math.random()) - 0.5;
        })
        .each(function () {
          $(this).appendTo($(".owl-carousel"));
        });
    },
  });
}

if ($(".data-panel-sticky").length) {
  stickybits(".data-panel-sticky", { useStickyClasses: true });
  $(".supernav").addClass("supernav-secondary-present");
}

// lazy load
var lazyLoadInstance = new LazyLoad({});

var latestSliderPosition = 0;
var latestSliderWidth = 100;
var maxSliderHeight = 0;
var latestTechPosition = 0;

function articleSocial() {
  // add social for articles
  if (
    $(".article--headline").length ||
    $(".press-release-boilerplate").length > 0
  ) {
    //test on latest first & case studies
    if (
      ($(".btn--link.parentLink").text() == "The Latest" ||
        $(".btn--link.parentLink").text() == "Blog" ||
        $(".press-release-boilerplate").length > 0 ||
        $(".btn--link.parentLink").text() == "Case Studies" ||
        $(".custom-brow span").text() == "Highlights") &&
      $("h1").eq(0).text() !=
        "ARC Provides Updated Air Travel Data During COVID-19"
    ) {
      var link = window.location.href;
      var url = window.location.href + "?utm_source=social_share";
      var meta = $("meta[name='description']").prop("content");
      var title = $("h1.mainTitle").text();
      var type = "";

      var headline = $(".article--headline").length
        ? $(".article--headline")
        : $(".page--headline");

      if ($(".press-release-boilerplate").length > 0) {
        headline.parent().addClass("blog-layout").addClass("newsroom-layout");
        type = "newsrelease";
      } else {
        headline.parent().addClass("blog-layout");
      }

      if (
        $(".btn--link.parentLink").text() == "The Latest" ||
        $(".btn--link.parentLink").text() == "Blog"
      ) {
        type = "blog";
      }

      if (link.indexOf("blog-page.html") > -1) {
        link =
          "https://www2.arccorp.com/articles-trends/the-latest/ARC-Moves-Direct-Connect-NDC-Forward/";
      }
      $(".press-release-boilerplate").length > 0;

      if (link.indexOf("no-author") > -1) {
        link =
          "https://www2.arccorp.com/articles-trends/the-latest/book-now-pay-later-options-for-travel-agencies/";
      }

      console.log(link);

      var subString = link
        .substring(link.indexOf("latest/") + 7)
        .replace("/", "");
      if (link.indexOf("arctravelconnect") > -1) {
        subString = link
          .substring(link.indexOf("highlights/") + 11)
          .replace("/", "");
      }

      var articleDate = $(".author-byline .metadata li").last().text();

      var isAuthor = $(".page-author").length > 0;

      var articleAuthor = isAuthor
        ? $(".author-byline .metadata li").first().text()
        : "";

      var newsreleaseSub = $(".rtf").find(".leadin-text").eq(0).text();

      if (newsreleaseSub.length) {
        $(".rtf").find(".leadin-text").eq(0).hide();
      }

      subString = subString.split("?")[0];

      subString = subString.endsWith("/") ? subString.slice(0, -1) : subString;

      var imgLink =
        "https://www2.arccorp.com/globalassets/homepage/redesign/latest/" +
        subString +
        ".jpg";

      var isRelated = $(".related-content__content").length > 0;

      var authorSection = "";

      //add facebook share
      var facebookUrl =
        "https://www.facebook.com/sharer/sharer.php?u=" +
        encodeURIComponent(url);
      $(".articleShareContainer").append(
        "<a class='articleShare articleShare-facebook' target='_blank' href='" +
          facebookUrl +
          "'></a>"
      );

      //add twitter share
      var twitterUrl =
        "http://twitter.com/intent/tweet?text=" +
        encodeURIComponent(title) +
        "&url=" +
        encodeURIComponent(url) +
        "&via=ARCtalk";
      $(".articleShareContainer").append(
        "<a class='articleShare articleShare-twitter' target='_blank' href='" +
          twitterUrl +
          "'></a>"
      );

      //add linkedin share
      var linkedinUrl =
        "https://www.linkedin.com/shareArticle?mini=true&url=" +
        encodeURIComponent(url) +
        "&title=" +
        encodeURIComponent(title) +
        "&summary=" +
        encodeURIComponent(meta);
      $(".articleShareContainer").append(
        "<a class='articleShare articleShare-linkedin' target='_blank' href='" +
          linkedinUrl +
          "'></a>"
      );

      authorSection =
        "<div class='arc-blog-author-side'>" +
        (isAuthor
          ? "<img class='arc-blog-author-img' src='" +
            $(".page-author__avatar img").attr("src") +
            "'/>" +
            "<div class='arc-blog-author-title'>About the Author</div>" +
            "<div class='arc-blog-author-description'>" +
            $(".page-author__body").html() +
            "</div>"
          : "") +
        "<div class='arc-blog-share'>" +
        "<a href='" +
        linkedinUrl +
        "'><img src='https://www2.arccorp.com/globalassets/homepage/redesign/march-update/linkedin_logo.png'/></a>" +
        "<a href='" +
        twitterUrl +
        "'><img src='https://www2.arccorp.com/globalassets/homepage/redesign/march-update/twitter_logo.png'/></a>" +
        "<a href='" +
        facebookUrl +
        "'><img src='https://www2.arccorp.com/globalassets/homepage/redesign/march-update/facebook_logo.png'/></a>" +
        "</div>" +
        "</div>";

      var noImg =
        $(".btn--link.parentLink").text() == "Case Studies" ||
        $(".press-release-boilerplate").length;

      headline.before(
        (type == "newsrelease"
          ? '<div class="arc-sticky-container" style="z-index: 3; position: sticky; top: 0px;"><div class="bg-color-tarmac arc-sticky-inner"><div class="arc-sticky-nav"><div class="arc-sticky-brand d-flex align-items-center"><a href="https://www2.arccorp.com/about-us/newsroom/" class="arc-sticky-title" style="line-height: 20px;">Newsroom</a></div><div class="arc-sticky-links d-flex align-items-center"></div><div class="arc-sticky-menu d-flex align-items-center"><a href="https://www2.arccorp.com/about-us/newsroom/subscribe/" class="arc-sticky-link-right">Subscribe to ARC News <i class="fas fa-chevron-right"></i></a></div></div></div></div>'
          : "") +
          (type == "blog"
            ? '<div class="arc-sticky-container" style="z-index: 3; position: sticky; top: 0px;"><div class="bg-color-tarmac arc-sticky-inner"><div class="arc-sticky-nav"><div class="arc-sticky-brand d-flex align-items-center"><a href="https://www2.arccorp.com/articles-trends/articles/" class="arc-sticky-title" style="line-height: 20px;">Articles</a></div><div class="arc-sticky-links d-flex align-items-center"></div><div class="arc-sticky-menu d-flex align-items-center"><a href="https://www2.arccorp.com/about-us/contact-us/" class="arc-sticky-link-right">Contact Us <i class="fas fa-chevron-right"></i></a></div></div></div></div>'
            : "") +
          "<div class='arc-blog-post'><div class='arc-blog-post-jumbo " +
          (!noImg ? "" : "no-img") +
          "'><div class='row no-gutters'><div class='" +
          (!noImg ? "col-lg-6" : "d-none") +
          "'><div class='arc-blog-post-left'>" +
          (!noImg
            ? "<div class='arc-blog-post-top-img'><img src='" +
              imgLink +
              "' /></div> "
            : "") +
          " </div></div><div class='" +
          (!noImg
            ? "col-lg-6"
            : type == "newsrelease"
            ? "offset-lg-2 col-lg-8 newsrelease-headline"
            : "col-lg-12") +
          "'><div class='arc-blog-post-right-container '><div class='arc-blog-post-right'><div>" +
          "<div class='arc-blog-eyebrow'>" +
          articleDate +
          " <i class='fa fa-circle'></i> <span class='readingTime'></span> Read</div>" +
          "<div class='arc-blog-title'> " +
          $(".mainTitle").text() +
          "</div>" +
          "<div class='arc-blog-description'>" +
          (type == "newsrelease" ? newsreleaseSub : meta) +
          "</div>" +
          (type == "newsrelease" ? authorSection : "") +
          (isAuthor
            ? "<div class='arc-blog-author'>" + articleAuthor + "</div>"
            : "") +
          "</div></div></div></div></div></div>" +
          "<div class='arc-blog-content'><div class='row'>" +
          (type == "newsrelease"
            ? "<div class='col-lg-2'></div>"
            : "<div class='" + "col-lg-3" + "'>" + authorSection + "</div>") +
          "<div class='" +
          (type == "newsrelease" ? "col-lg-8" : "col-lg-9") +
          "'><div class='arc-blog-html'>" +
          $(".rtf").html() +
          (type == "newsrelease"
            ? '<div class="row"><div class="col-lg-12"> <p  style="padding-top: 30px; margin-top: 30px;border-top:1px solid #2a2b2c;"><strong>Connect with ARC</strong></p> <p> <span >ARC accelerates the growth of global air travel by delivering forward-looking travel data, flexible distribution services and other innovative industry solutions. We are a leading travel intelligence company that possesses the world’s largest, most comprehensive global airline ticket dataset, including more than 15 billion passenger flights representing 490 airlines and 230 countries and territories. Our solutions and expertise strengthen economies and enrich lives by connecting stakeholders across the travel ecosystem. For more information, visit </span ><a href="http://www.arccorp.com/">arccorp.com</a><span>.</span> </p> </div> </div>' +
              '<div class="row"><div class="col-lg-12"><p><strong>Contact</strong></p>Randy Spoon<br/>1-703-816-5119<br/><a href="mailto:rspoon@arccorp.com">rspoon@arccorp.com</a></div></div>' +
              "</div><div></div></div>"
            : "") +
          "</div><div class='arc-blog-mobile-author'><div class='row'><div class='col-lg-12'>" +
          authorSection +
          "</div></div></div>"
      );

      console.log(isRelated);

      if (isRelated) {
        var cards = "";
        $(".related-content__items .content-block").each(function () {
          var title = $(this).find(".ctaLink").text();
          var description = $(this).find(".content-block__body").html();
          var link = $(this).find(".ctaLink").attr("href");
          var subString = link
            .substring(link.indexOf("latest/") + 7)
            .replace("/", "");
          if (link.indexOf("arctravelconnect") > -1) {
            subString = link
              .substring(link.indexOf("highlights/") + 11)
              .replace("/", "");
          }

          var imgLink =
            "https://www2.arccorp.com/globalassets/homepage/redesign/latest/" +
            subString +
            ".jpg";

          var card =
            "<div class='col-lg-3'><div class='arc-blog-related-card'><div class='arc-blog-related-text'><div class='arc-blog-related-text-title'>" +
            title +
            "</div><div class='arc-blog-related-description'>" +
            description +
            "</div><a href='" +
            link +
            "' class='link-download'>Learn More <i class='fas fa-chevron-right'></i></a></div></div></div>";

          cards += card;
        });

        $("footer").before(
          "<div class='bg-color-fog'><div class='arc-blog-related'><div class='arc-blog-related-title'>Related Resources</div><div class='row'>" +
            cards +
            "</div></div></div>"
        );
      }

      $(".article-body").readingTime({
        readingTimeTarget: ".readingTime",
      });
    }
  }
} //end articleSocial

//functions for tabs
articleSocial();
//readingTime();

function webinarPages() {
  if ($(".btn--link.parentLink")) {
    if ($(".btn--link.parentLink").text().indexOf("On-Demand Webinars") > -1) {
      $("body").addClass("webinarPageLayout");

      var stickyNav =
        '<div class="arc-sticky-container" style="z-index: 3; position: sticky; top: 0px;"><div class="bg-color-tarmac arc-sticky-inner"><div class="arc-sticky-nav"><div class="arc-sticky-brand d-flex align-items-center"><a href="https://www2.arccorp.com/articles-trends/on-demand-webinars/" class="arc-sticky-title" style="line-height: 20px;">On-Demand Webinars</a></div><div class="arc-sticky-links d-flex align-items-center"></div><div class="arc-sticky-menu d-flex align-items-center"><a href="https://www2.arccorp.com/about-us/contact-us/" class="arc-sticky-link-right">Contact Us<i class="fas fa-chevron-right"></i></a></div></div></div></div>';

      $(".page--headline").before(stickyNav);

      $(".btn--link.parentLink").hide();
    }
  }
}

//style with new news release
webinarPages();

//mountsticky();
