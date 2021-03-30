import "core-js/stable";
import "regenerator-runtime/runtime";
import "intersection-observer";

import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueLazyload from "vue-lazyload";

Vue.use(BootstrapVue);
Vue.use(VueLazyload);

var latestData = {
  currentPage: "home",
  filterName: "home",
  homepageData: [],
  homepageMoreIndex: 0,
  filterMoreIndex: 6,
  filterData: [],
  latestFirst: {},
  latestAdditional: [],
  featuredData: [],
  recommendedData: [],
  backgroundCover: "cover"
};

function imageExists(image_url) {
  var http = new XMLHttpRequest();

  http.open("HEAD", image_url, false);
  http.send();

  return http.status != 404;
}

function setPostData(el) {
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
  post.postBody = el.find(".content-block--pageItem__body").text();

  var postTagsTemp = post.postTags;
  var postTagsFinal = [];

  for (var i = 0; i < postTagsTemp.length; i++) {
    var val = postTagsTemp[i].trim();
    if (val.indexOf("Distribution Evolved") > -1) {
      // do nothing
    } else if (
      val.indexOf("Connection") > -1 ||
      val.indexOf("Data") > -1 ||
      val.indexOf("Innovation") > -1 ||
      val.indexOf("Distribution") > -1
    ) {
      postTagsFinal.push(postTagsTemp[i].trim());
    }
  }

  post.postTags = postTagsFinal;

  //getimageUrl
  var link = el.find(".content-block--pageItem__title a").prop("href");
  var subString = link.substring(link.indexOf("latest/") + 7).replace("/", "");
  if (link.indexOf("arctravelconnect") > -1) {
    subString = link
      .substring(link.indexOf("highlights/") + 11)
      .replace("/", "");
  }
  var imgLink =
    "https://www2.arccorp.com/globalassets/homepage/redesign/latest/" +
    subString +
    ".jpg";
  var imgLinkJumbo =
    "https://www2.arccorp.com/globalassets/homepage/redesign/latest/" +
    subString +
    "-jumbo.jpg";

  post.postImg = "";

  if (parseInt(post.postDate.split(",")[1]) > 2017) {
    var date = post.postDate.split(" ");

    if (
      (date[0] == "Jan" ||
        date[0] == "Feb" ||
        date[0] == "Mar" ||
        date[0] == "Apr") &&
      date[2] == "2018"
    ) {
    } else if (imageExists(imgLink)) {
      post.postImg = imgLink;
      post.postImgJumbo = imgLinkJumbo;
    }
  }

  post.postLink = link;

  return post;
}

function generateHomepage() {
  loadingBarStart();
  //get first post and set to latestFirst
  var postFirst = $(".latestGrid .content-block--pageItem").eq(0);
  var featuredPost = {};
  featuredPost.postTitle = $(".featuredPost .block-header").text();
  featuredPost.postTags = $(".featuredPost .eyebrow")
    .text()
    .split(",");
  featuredPost.postDate = $(".featuredPost .date").text();
  featuredPost.postBody = $(".featuredPost .body").html();
  featuredPost.postLink = $(".featuredPost .ctaBtn--main").prop("href");
  featuredPost.postImgJumbo = $(".featuredPost .ctaBtn--secondary").prop(
    "href"
  );

  var postTagsTemp = featuredPost.postTags;
  var postTagsFinal = [];

  for (var i = 0; i < postTagsTemp.length; i++) {
    var val = postTagsTemp[i].trim();
    if (val.indexOf("Distribution Evolved") > -1) {
      // do nothing
    } else if (
      val.indexOf("Connection") > -1 ||
      val.indexOf("Data") > -1 ||
      val.indexOf("Innovation") > -1 ||
      val.indexOf("Distribution") > -1
    ) {
      postTagsFinal.push(postTagsTemp[i].trim());
    }
  }

  featuredPost.postTags = postTagsFinal;

  latestData.latestFirst = featuredPost;

  var maxLoad = 6;

  for (var i = 0; i < maxLoad; i++) {
    var postFirst = $(".latestGrid .content-block--pageItem").eq(i);
    latestData.latestAdditional.push(setPostData(postFirst));
  }

  latestData.homepageMoreIndex = 6;

  generateFeatured();
  generateRecommended();

  loadingBarEnd();
}

function generateHomeMore() {
  var maxlength = $(".latestGrid .content-block--pageItem").length;
  var max =
    maxlength < latestData.homepageMoreIndex + 6
      ? maxlength
      : latestData.homepageMoreIndex + 6;

  for (var i = latestData.homepageMoreIndex; i < max; i++) {
    var post = $(".latestGrid .content-block--pageItem").eq(i);
    latestData.latestAdditional.push(setPostData(post));

    if (i == maxlength - 1) {
      $(".addMore").hide();
    }
  }

  latestData.homepageMoreIndex = max;
}

function generateFilter(filter) {
  loadingBarStart();

  var $el = $(".latestGrid .content-block--pageItem");

  if (filter == "Case_Studies") {
    $el = $(".case-studies .content-block--pageItem");
  }

  var max = $el.length;

  for (var i = latestData.filterMoreIndex; i < max; i++) {
    var post = $(".latestGrid .content-block--pageItem").eq(i);

    var tags = post
      .find(".content-block--pageItem__metadata li")
      .eq(0)
      .text();
    if (tags.indexOf(filter) > -1) {
      latestData.filterData.push(setPostData(post));
    } else if (filter == "Case_Studies") {
      latestData.filterData.push(setPostData(post));
    }
  }

  loadingBarEnd();
}

function generateFeatured() {
  var $el = $(".latestGrid .content-block--pageItem");

  var filter = "Featured";

  $el.each(function(index) {
    var post = $(this);
    var tags = post
      .find(".content-block--pageItem__metadata li")
      .eq(0)
      .text();
    if (tags.indexOf(filter) > -1 && latestData.featuredData.length < 6) {
      latestData.featuredData.push(setPostData(post));
    }
  });
}

function generateRecommended() {
  var $el = $(".latestGrid .content-block--pageItem");

  var filter = "Recommended";

  $el.each(function(index) {
    var post = $(this);
    var tags = post
      .find(".content-block--pageItem__metadata li")
      .eq(0)
      .text();
    if (tags.indexOf(filter) > -1 && latestData.recommendedData.length < 6) {
      latestData.recommendedData.push(setPostData(post));
    }
  });
}

var latestApp = new Vue({
  el: ".latestPage",
  data: latestData,
  computed: {
    filteredData: function() {
      var index = this.filterMoreIndex;
      var arr = this.filterData.slice(0, index);
      return arr;
    }
  },
  methods: {
    filterSwitch: function(filter) {
      //reset filter data
      this.filterData = [];

      //context switch functions
      if (filter == "home") {
        loadingBarStart();
        this.currentPage = "home";
        this.filterName = "home";
        loadingBarEnd();
      } else {
        //generate new filter data
        console.log(filter);
        generateFilter(filter);
        this.currentPage = "filter";
        this.filterName = filter;
      }
    },
    incrementFilter: function() {
      this.filterMoreIndex =
        this.filterMoreIndex + 6 > this.filterData.length
          ? this.filterData.length
          : this.filterMoreIndex + 6;
    },
    generateHomeMore: function(event) {
      event.preventDefault();
      generateHomeMore();
    },
    isActive: function(filter) {
      if (filter == this.filterName) {
        return true;
      }
      return false;
    }
  }
});

loadingBarInit();

generateHomepage();

$(".secondaryNavInner-mobile-icon").click(function() {
  $(".secondaryNavInner-links").toggle();
});

//loading bar code
function loadingBarInit() {
  $(".latestPage").prepend(
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

jQuery
  .ajax({
    url:
      "https://arccorp-script-test.netlify.app/.netlify/functions/twitterAPI",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    type: "GET"
  })
  .done(function(data) {
    console.log("=== Twitter Content Loaded ===");
    var twitterCode =
      '<div class="twitterContainer animated fadeIn" style="background-size: cover; position:relative; z-index:1;"><div class="container container-longer"><div class="row mt-5"><div class="col-lg-12"><div class="twitterHeader">The Latest on Social</div></div></div><div class="row">';
    var tweetObjs = [];

    for (var i = 0; i < data.length; i++) {
      if (data[i].entities.media != undefined) {
        var imageWidth = data[i].entities.media[0]["sizes"]["medium"]["w"];
        var imageHeight = data[i].entities.media[0].sizes.medium.h;

        if (
          (imageWidth == 1250 && imageHeight == 650) ||
          (imageWidth == 1250 && imageHeight == 625) ||
          (imageWidth == 1200 && imageHeight == 624) ||
          (imageWidth == 650 && imageHeight == 325) ||
          (imageWidth == 600 && imageHeight == 300) ||
          (imageHeight == 417 && imageWidth == 833)
        ) {
          tweetObjs.push(data[i]);
        }
      }
    }

    //console.log(tweetObjs);

    for (var i = 0; i < 4; i++) {
      var imageURL = tweetObjs[i].entities.media[0].media_url_https;
      var tweetImageURL = tweetObjs[i].entities.media[0].url;
      var arcURL = tweetImageURL;
      var tweetURL = tweetImageURL;
      var text = tweetObjs[i].full_text
        .replace(tweetImageURL, "")
        .replace("Read More", "")
        .replace(
          tweetURL,
          '<a target="_blank" + href="' + tweetURL + '">' + tweetURL + "</a>"
        );

      if (tweetObjs[i].entities.urls.length > 0) {
        if (tweetObjs[i].entities.urls[0].hasOwnProperty("expanded_url")) {
          arcURL = tweetObjs[i].entities.urls[0].expanded_url;
        }

        if (tweetObjs[i].entities.urls[0].hasOwnProperty("url")) {
          tweetURL = tweetObjs[i].entities.urls[0].url;
        }
      }

      twitterCode +=
        '<div class="col-lg-3">' +
        '<a class="mainTweet" href="' +
        arcURL +
        '" target="_blank"><div class="tweetName">ARC <span>@ARCtalk</span></div><p>' +
        text +
        '</p><img src="' +
        imageURL +
        '"></a></div>';
    }

    twitterCode += "</div></div></div>";
    $(".latestTwitter").html(twitterCode);
  });
