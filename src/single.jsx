//css imports
import "./css/main.scss";

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom";

//js dependency imports
//import $ from "jquery";
import Vue from "vue";
import "owl.carousel";
import "jquery-validation";
import stickybits from "stickybits";
import LazyLoad from "vanilla-lazyload";
import mountsticky from "./js/partials/stickynav";

const Apphome = lazy(() => import("./apphome"));
const Footer = lazy(() => import("./footer"));

var footerNode = document.getElementById("arc-footer");
var mountNode = document.getElementById("home-app");

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

if ($(".data-panel-sticky").length) {
  stickybits(".data-panel-sticky", { useStickyClasses: true });
  $(".supernav").addClass("supernav-secondary-present");
}

// lazy load
var lazyLoadInstance = new LazyLoad({});

function formValidate() {
  if ($(".page-form").length) {
    $(document).ready(function () {
      $(".page-form form").attr("id", "silverpopForm");
      $("#silverpopForm").validate({
        errorPlacement: function (error, element) {
          if ($(element).is(".error")) {
            $(element)
              .parents("div")
              .find(".fieldLabel")
              .addClass("fieldLabelError");
            if (error.prop("outerText") != "") {
              var placement = $(element).data("error");
              if (placement) {
                $(placement).append(error);
              } else {
                error.insertAfter(element);
              }
            }
          }
        },
      });
      $("select", ".page-form").each(function () {
        $(this).rules("add", {
          required: function (element) {
            return (
              $(element)
                .parents("div", "div[id^=container_]")
                .find("span.required").length > 0 &&
              $(this).find("option:selected").length < 1
            );
          },
          messages: {
            required: "",
          },
        });
      });
      $("input", ".page-form").each(function () {
        if (this.parentNode.getElementsByTagName("span").length) {
          $(this).rules("add", {
            required: function (element) {
              return (
                $(element)
                  .parents("div", "div[id^=container_]")
                  .find("span.required").length > 0
              );
            },
            messages: {
              required: "",
            },
            unhighlight: function (element) {
              if (
                $(element).is(".error") === !1 ||
                element["aria-invalid"] == !1
              ) {
                $(element)
                  .parents("div")
                  .find(".fieldLabel")
                  .removeClass("fieldLabelError");
              }
            },
          });
        }
      });
      $("input[aria-required='true']", "div[id^=container_]").rules("add", {
        required: !0,
      });
      $(
        "input[data-email], input[type='email'], input[name='Email']",
        "div[id^=container_]"
      ).rules("add", {
        email: !0,
      });
      $("input[type='tel'], input[name*='phone']", "div[id^=container_]").rules(
        "add",
        {
          phoneUS: !0,
        }
      );
      $("input[type='number']", "div[id^=container_]").rules("add", {
        number: !0,
      });
    });
    jQuery.validator.addMethod(
      "phoneUS",
      function (phone_number, element) {
        phone_number = phone_number.replace(/\s+/g, "");
        return (
          this.optional(element) ||
          (phone_number.length > 9 &&
            phone_number.match(/^[+]?([0-9]*[\.\s\-\(\)]|[0-9]+){3,24}$/))
        );
      },
      "Please specify a valid phone number."
    );
  }
}

var data = {
  primaryNav: "",
  loginActive: false,
  contactActive: false,
  showSearch: false,
  formInput: "",
};

//supernav
var app = new Vue({
  el: ".supernav",
  data: data,
  methods: {
    primaryNavCheck: function (item) {
      return item === this.primaryNav;
    },
    navPanelReset: function () {
      this.primaryNav = "";
    },
    navPanelSwitch: function (curNav) {
      this.primaryNav = curNav;
    },
    showPopup: function (elem) {
      if (this[elem] == false) {
        if (elem == "contactActive") {
          this.loginActive = false;
        } else {
          this.contactActive = false;
        }
      }
      this[elem] = !this[elem];
    },
    hideLogin: function () {
      this.loginActive = false;
      this.contactActive = false;
    },
    hideContact: function () {
      this.contactActive = false;
    },
    toggleSearch: function () {
      if (this.showSearch == false) {
        this.showSearch = true;
        this.$nextTick(() => {
          this.$refs.search.focus();
        });
      } else {
        this.showSearch = false;
      }
    },
  },
  directives: {
    "click-outside": {
      bind: function (el, binding, vNode) {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== "function") {
          const compName = vNode.context.name;
          let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`;
          if (compName) {
            warn += `Found in component '${compName}'`;
          }

          console.warn(warn);
        }
        // Define Handler and cache it on the element
        const bubble = binding.modifiers.bubble;
        const handler = (e) => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e);
          }
        };
        el.__vueClickOutside__ = handler;

        // add Event Listeners
        document.addEventListener("click", handler);
      },

      unbind: function (el, binding) {
        // Remove Event Listeners
        document.removeEventListener("click", el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
      },
    },
  },
});

//add class to news release pages
function newsRelease() {
  if ($(".btn--link.parentLink")) {
    if ($(".btn--link.parentLink").text().indexOf("News Releases") > -1) {
      $("body").addClass("newsReleaseLayout");

      $(".btn--link.parentLink").text("Newsroom");
      $(".btn--link.parentLink").attr("href", "/about-us/newsroom");
    }
  }
}

function webinarPages() {
  if ($(".btn--link.parentLink")) {
    if ($(".btn--link.parentLink").text().indexOf("On-Demand Webinars") > -1) {
      $("body").addClass("webinarPageLayout");
    }
  }
}

//style with new news release
newsRelease();
webinarPages();

//rewriting simple foundation scripts for speed
//tabbedPanel();
//stickyNav();
//formValidate();

$(".supernav-mobile-icon .icon-menu").click(function () {
  $(".supernav-mobile-menu").toggle();
  if ($(".supernav-mobile-menu").css("display") == "none") {
    console.log(true);
    $(".supernav-sub").hide();
  }
});

//function for sign-in
if ($(".navcontainer").hasClass("signedIn")) {
  var username = $(".navcontainer").data("username");

  $("#frmMyARCLogin").hide();
  $(".supernav-loggedin").show();

  $(".supernav-myarc-username").html(username);
}

mountsticky();


ReactDOM.render(
  <Suspense
    fallback={
      <div className="loading-container">
        <div className="loading">
          <div className="loading-icon">
            <i className="fas fa-circle-notch fa-spin"></i>
          </div>
        </div>
      </div>
    }
  >
    <Apphome />
  </Suspense>,
  mountNode
);

ReactDOM.render(
  <Suspense
    fallback={
      <div className="loading-container">
        <div className="loading">
          <div className="loading-icon">
            <i className="fas fa-circle-notch fa-spin"></i>
          </div>
        </div>
      </div>
    }
  >
    <Footer />
  </Suspense>,
  footerNode
);