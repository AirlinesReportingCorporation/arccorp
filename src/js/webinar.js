import "core-js/stable";
import "regenerator-runtime/runtime";
import "intersection-observer";

import Vue from "vue";
import VueLazyload from "vue-lazyload";

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1
});

var data = {
  jumboTitle:
    "What Travel Professionals Need to Know About Fraud During COVID-19",
  jumboLink:
    "https://www2.arccorp.com/articles-trends/on-demand-webinars/2020-webinars/webinar-090920/?utm_source=OnDemand_Jumbo",
  jumboTags: ["Agent / Airline Webinar"],
  jumboDescription:
    "During this webinar, ARC’s revenue integrity and payments experts will share data on fraud trends they have seen so far in 2020, including insights specific to the COVID-19 pandemic.",
  jumboButtonText: "View",
  jumboImg:
    "https://www2.arccorp.com/globalassets/homepage/redesign/slides/carousel16.jpg",
  featuredList: [
    "Closing the Loop: Managing Travel Fraud in Chaotic Times",
    "The Battle Against Fraud: Payment Managers",
    "Global Travel Fraud Trends to Watch"
  ],
  recommendList: [
    "An Overview and Demo of the",
    "Spotlight on NDC",
    "Overview - Agencies"
  ],
  mostViewedList: [
    "An Introduction to ONE Order",
    "Staying Vigilant: How to Combat Fraud During COVID-19",
    "Talk NDC with British Airways"
  ],
  homepageMoreIndex: 0,
  archiveLength: 0,
  recentLength: 0,
  curEl: ".2020-archive",
  recentFinished: true,
  webinarList: [],
  featuredData: [],
  recommendedData: [],
  mostViewedData: []
};

function setPostData(el, param) {
  param = param || 0;

  var parentGrid = el
    .parent()
    .parent()
    .parent()
    .parent()
    .attr("class");

  var post = {};
  post.postTitle = el
    .find(".content-block--pageItem__title a")
    .text()
    .replace("Case Study - ", "");
  post.postTags = el
    .find(".content-block--pageItem__metadata li")
    .eq(0)
    .text()
    .split(",");

  post.postDate = el
    .find(".content-block--pageItem__metadata li")
    .eq(1)
    .text();

  if (parentGrid.indexOf("2020-archive") > -1) {
    post.postDate = el
    .find(".content-block--pageItem__metadata li")
    .eq(0)
    .text();

    post.postTags = el
      .find(".content-block--pageItem__metadata li")
      .eq(1)
      .text()
      .split(",");
  }

  post.postBody = el.find(".content-block--pageItem__body").text();

  var postTagsTemp = post.postTags;
  var postTagsFinal = [];

  for (var i = 0; i < postTagsTemp.length; i++) {
    var val = postTagsTemp[i].trim();
    if (val.indexOf("Distribution Evolved") > -1) {
      // do nothing
    } else if (
      val.indexOf("Virtual") > -1 ||
      val.indexOf("Agent/ Airline Webinar") > -1 ||
      val.indexOf("Online Webinar") > -1 ||
      val.indexOf("Agent Webinar") > -1 ||
      val.indexOf("Airline Webinar") > -1 ||
      val.indexOf("Fraud On-Demand") > -1
    ) {
      postTagsFinal.push(postTagsTemp[i].trim());
    }
  }

  post.postTags = postTagsFinal;

  //getimageUrl
  var link = el.find(".content-block--pageItem__title a").prop("href");

  var lastLink = link.split("/");
  var imageUrlLast = "";

  if (lastLink[lastLink.length - 1] == "") {
    imageUrlLast = lastLink[lastLink.length - 2];
  } else {
    imageUrlLast = lastLink[lastLink.length - 1];
  }

  var imgLink =
    "https://www2.arccorp.com/globalassets/homepage/redesign/webinar/" +
    imageUrlLast +
    ".jpg";

  post.postImg = imgLink;

  if (param) {
    link += param;
  }

  post.postLink = link;

  if(post.postTags.length == 0) {
    post.postTags.push("Online Webinar");
  }

  return post;
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateHomepage() {
  var latestGridEl = ".2020-archive";

  var maxLoad = 3;

  var length2020 = $(latestGridEl + " .content-block--pageItem").length;
  var lengthArchive = $(".archive .content-block--pageItem").length;

  data.recentLength = length2020;
  data.archiveLength = lengthArchive;

  for (var i = 0; i < maxLoad; i++) {
    var postFirst = $(latestGridEl + " .content-block--pageItem").eq(i);
    data.webinarList.push(setPostData(postFirst));
  }

  data.homepageMoreIndex = 3;

  generateFeatured();
  generateRecommended();
  generateMostViewed();
}

function generateFeatured() {
  var $el = $(".2020-archive .content-block--pageItem");
  var $el2 = $(".archive .content-block--pageItem");

  $el.each(function(index) {
    var post = $(this);

    var postTitle = post.find(".content-block--pageItem__title a").text();

    for (var i = 0; i < data.featuredList.length; i++) {
      if (postTitle.indexOf(data.featuredList[i]) > -1) {
        data.featuredData.push(
          setPostData(post, "?utm_source=OnDemand_Feature")
        );
      }
    }
  });

  $el2.each(function(index) {
    var post = $(this);

    var postTitle = post.find(".content-block--pageItem__title a").text();

    for (var i = 0; i < data.featuredList.length; i++) {
      if (postTitle.indexOf(data.featuredList[i]) > -1) {
        data.featuredData.push(setPostData(post));
      }
    }
  });
}

function generateRecommended() {
  var $el = $(".2020-archive .content-block--pageItem");
  var $el2 = $(".archive .content-block--pageItem");

  $el.each(function(index) {
    var post = $(this);

    var postTitle = post.find(".content-block--pageItem__title a").text();

    for (var i = 0; i < data.featuredList.length; i++) {
      if (postTitle.indexOf(data.recommendList[i]) > -1) {
        data.recommendedData.push(
          setPostData(post, "?utm_source=OnDemand_Recommends")
        );
      }
    }
  });

  $el2.each(function(index) {
    var post = $(this);

    var postTitle = post.find(".content-block--pageItem__title a").text();

    for (var i = 0; i < data.featuredList.length; i++) {
      if (postTitle.indexOf(data.recommendList[i]) > -1) {
        data.recommendedData.push(
          setPostData(post, "?utm_source=OnDemand_Recommends")
        );
      }
    }
  });
}

function generateMostViewed() {
  var $el = $(".2020-archive .content-block--pageItem");
  var $el2 = $(".archive .content-block--pageItem");

  $el.each(function(index) {
    var post = $(this);

    var postTitle = post.find(".content-block--pageItem__title a").text();

    for (var i = 0; i < data.featuredList.length; i++) {
      if (postTitle.indexOf(data.mostViewedList[i]) > -1) {
        data.mostViewedData.push(
          setPostData(post, "?utm_source=OnDemand_MostViewed")
        );
      }
    }
  });

  $el2.each(function(index) {
    var post = $(this);

    var postTitle = post.find(".content-block--pageItem__title a").text();

    for (var i = 0; i < data.featuredList.length; i++) {
      if (postTitle.indexOf(data.mostViewedList[i]) > -1) {
        data.mostViewedData.push(
          setPostData(post, "?utm_source=OnDemand_MostViewed")
        );
      }
    }
  });
}

function generateHomeMore() {
  var el = data.curEl;
  var maxlength = data.recentLength;

  if (data.webinarList.length >= data.recentLength && el == ".2020-archive") {
    if (data.recentLength % 3 != 0) {
      data.homepageMoreIndex = 1;
    } else {
      data.homepageMoreIndex = 0;
    }
  }

  if (data.webinarList.length >= data.recentLength) {
    el = ".archive";
    data.curEl = ".archive";
    maxlength = data.archiveLength;
  }

  var max =
    maxlength < data.homepageMoreIndex + 3
      ? maxlength
      : data.homepageMoreIndex + 3;

  for (var i = data.homepageMoreIndex; i < max; i++) {
    var post = $(el + " .content-block--pageItem").eq(i);
    data.webinarList.push(setPostData(post));

    if (i == maxlength - 1 && data.webinarList.length >= data.recentLength) {
      $(".addMore").hide();
    }
  }

  if (data.webinarList.length >= data.recentLength && el == ".2020-archive") {
    if (data.recentLength % 3 != 0) {
      var post = $(".archive .content-block--pageItem").eq(0);
      data.webinarList.push(setPostData(post));
    }
  }

  data.homepageMoreIndex = max;
}

var latestApp = new Vue({
  el: ".on-demand-webinar-page",
  data: data,
  methods: {
    generateHomeMore: function(event) {
      event.preventDefault();
      generateHomeMore();
    }
  }
});

generateHomepage();
