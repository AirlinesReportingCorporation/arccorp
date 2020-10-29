import "core-js/stable";
import "regenerator-runtime/runtime";
import "intersection-observer";

import Vue from "vue";
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload);

var data = {
  jumboTitle:
    "What Travel Professionals Need to Know About Fraud During COVID-19",
  jumboLink:
    "https://www2.arccorp.com/articles-trends/on-demand-webinars/2020-webinars/webinar-090920/",
  jumboTags: ["Agent / Airline Webinar"],
  jumboDescription:
    "During this webinar, ARC’s revenue integrity and payments experts will share data on fraud trends they have seen so far in 2020, including insights specific to the COVID-19 pandemic.",
  jumboButtonText: "Watch Now",
  jumboImg:
    "https://www2.arccorp.com/globalassets/homepage/redesign/slides/snowflake.jpg",
  featuredList: [
    "The Battle Against Fraud",
    "What Travel Professionals ",
    "Closing the Loop: Managing Travel Fraud in Chaotic Times"
  ],
  recommendList: [
    "COVID-19 and Trends in Payments",
    "How OTAs Can Prevent Costly Chargebacks",
    "Talk NDC with British Airways"
  ],
  mostViewedList: [
    "How Fraudsters Target Travel Agents",
    "Expert Panel: The True Cost of Fraud to Travel Agents",
    "What Travel Agencies Need to Know About Debit Memos"
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

function setPostData(el) {
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

  if (parentGrid.indexOf("2020-archive") > -1) {
    post.postTags = el
      .find(".content-block--pageItem__metadata li")
      .eq(1)
      .text()
      .split(",");
  }

  post.postDate = el
    .find(".content-block--pageItem__metadata li")
    .eq(1)
    .text();
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

  post.postImg = "";

  post.postLink = link;

  return post;
}

function loadingBarInit() {
  $(".on-demand-webinar-page").prepend(
    "<div class='progress'><div class='loadingBar'></div></div>"
  );
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function loadingBarStart() {
  var elem = $(".loadingBar");
  elem.css("width", "1%");
  elem.show();

  elem.animate(
    {
      width: randomIntFromInterval(1, 25) + "%"
    },
    400,
    function() {}
  );
  elem.animate(
    {
      width: randomIntFromInterval(25, 50) + "%"
    },
    400,
    function() {}
  );
  elem.animate(
    {
      width: randomIntFromInterval(50, 80) + "%"
    },
    400,
    function() {}
  );
}

function loadingBarEnd() {
  var elem = $(".loadingBar");
  var width = 51;
  elem.animate(
    {
      width: "100%"
    },
    800,
    function() {
      elem.hide();
      elem.css("width", "1%");
    }
  );
}

function generateHomepage() {
  loadingBarStart();

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

  loadingBarEnd();
}

function generateFeatured() {
  var $el = $(".2020-archive .content-block--pageItem");
  var $el2 = $(".archive .content-block--pageItem");

  $el.each(function(index) {
    var post = $(this);

    var postTitle = post.find(".content-block--pageItem__title a").text();

    for (var i = 0; i < data.featuredList.length; i++) {
      if (postTitle.indexOf(data.featuredList[i]) > -1) {
        data.featuredData.push(setPostData(post));
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
        data.recommendedData.push(setPostData(post));
      }
    }
  });

  $el2.each(function(index) {
    var post = $(this);

    var postTitle = post.find(".content-block--pageItem__title a").text();

    for (var i = 0; i < data.featuredList.length; i++) {
      if (postTitle.indexOf(data.recommendList[i]) > -1) {
        data.recommendedData.push(setPostData(post));
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
        data.mostViewedData.push(setPostData(post));
      }
    }
  });

  $el2.each(function(index) {
    var post = $(this);

    var postTitle = post.find(".content-block--pageItem__title a").text();

    for (var i = 0; i < data.featuredList.length; i++) {
      if (postTitle.indexOf(data.mostViewedList[i]) > -1) {
        data.mostViewedData.push(setPostData(post));
      }
    }
  });
}

function generateHomeMore() {

  console.log(data.homepageMoreIndex);

  var el = data.curEl;
  var maxlength = data.recentLength;

  if (data.webinarList.length >= data.recentLength && el == ".2020-archive") {
    data.homepageMoreIndex = 0;
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

loadingBarInit();

generateHomepage();

