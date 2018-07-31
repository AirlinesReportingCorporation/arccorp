//css imports
import '../css/main.scss';

//js dependency imports
import $ from 'jquery';
import Vue from 'vue';
import owlCarousel from 'owl.carousel';

var latestSliderPosition = 0;
var latestSliderWidth = 100;
var maxSliderHeight = 0;

var latestTechPosition = 0;

function latestSliderInit(){

  $(".homePageGrid .content-block--pageItem__inside").each(function(){
    var link = $(this).find(".ctaLink").prop("href");
    var subString = link.substring(link.indexOf("latest/") +7).replace("/", "");
    var imgLink = "https://www2.arccorp.com/globalassets/homepage/redesign/latest/" + subString + ".jpg";
    $(this).prepend("<a href='" + link + "'><img class='latestImage' src='"+ imgLink + "'></a>");
    $(this).append("<div class='read-more'><a href='" + link + "'>Read More</a></div>");
  });

  $(".latestImage").on( "error", function(){
    $(this).hide();
    $(this).after("<div style='width:280px;height:250px; background:#189bb0; margin-bottom:20px;'></div>");
  })

  $(".homePageGrid .page-grid__row").eq(0).prepend("<div class='featuredLatest content-block--pageItem'><div class='featuredLatestImage'><a target='_blank'  href='https://gbta18.mapyourshow.com/7_0/sessions/session-details.cfm?ScheduleID=179'><img src='https://www2.arccorp.com/globalassets/homepage/redesign/thelatest_ad.jpg'></a></div></div>");

  $(".content-block--pageItem__inside").prepend("");

  $('.page-grid__items.page-grid__items--expanded').addClass("owl-carousel").addClass("owl-theme");

  $(".page-grid__row").each(function(index){
    $(this).prop("data-hash", index);
  });

  $('.page-grid__items.page-grid__items--expanded').owlCarousel({
    loop: true,
    dots: true,
    items: 1,
    smartSpeed:1450,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1,
            autoWidth: true
        }
    },
    navText: [ '<img src="https://www2.arccorp.com/globalassets/homepage/redesign/arrowBlackleft.png">', '<img src="https://www2.arccorp.com/globalassets/homepage/redesign/arrowBlackright.png">']
  });


}

function techInit(){

  var length = $(".techContainer").length;
  var tcWidth = $(".techContainer").width();
  var techIcon = $(".techIcon").width();

  $(".iconContainer").width( (tcWidth * length) + 100 + "px");

  $(".techArrowRight").click(function(){
    var leftmargin = $(".iconContainer").css('margin-left');
    techIcon = $(".techIcon").width();
    var percentage = (tcWidth) / $(".techIcon").css("width").replace("px", "");

    var techNum = $(".iconContainer").width() - (techIcon * percentage);

    console.log((techNum * -1) >= leftmargin);

    if(latestTechPosition <= Math.abs(leftmargin.replace("px", "")) && (techNum * -1) <= leftmargin.replace("px", "") ){
      $(".iconContainer").stop(true, true).animate({
        marginLeft: '-=' + techIcon + 'px'
      }, 200);
      latestTechPosition += techIcon;
    }
  });

  $(".techArrowLeft").click(function(){
    var leftmargin = $(".iconContainer").css('margin-left');
    techIcon = $(".techIcon").width();
    //console.log(leftmargin);


    if(latestTechPosition > 0 ){
      $(".iconContainer").stop(true, true).animate({
        marginLeft: '+=' + techIcon + 'px'
      }, 200);
      latestTechPosition -= techIcon;
    }
  });
}

function quoteRandomize() {
  var num = $(".fullPanel").length;
  var random = Math.floor(Math.random() * num);
  $(".fullPanel-first").hide();
  $(".fullPanel").eq(random).show();
}

function productRandomize() {
  var num = $(".featuredProduct").length;
  var random = Math.floor(Math.random() * num);
  $(".featuredProduct-first").hide();
  $(".featuredProduct").eq(random).show();
}

function articleSocial() {
  // add social for articles
  if( $(".article--headline").length ) {

    //test on latest first
    if($(".btn--link.parentLink").text() == "The Latest") {
      var url = window.location.href;
      var meta = $("meta[name='description']").prop("content");
      var title = $("h1.mainTitle").text();

      console.log(url);
      console.log(meta);
      console.log(title);

      $(".basic-text-inside").eq(0).prepend("<div class='articleShareContainer'></div>");

      $(".articleShareContainer").append("<div class='shareTitle'>Share</div>");

      //add facebook share
      var facebookUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
      $(".articleShareContainer").append("<a class='articleShare articleShare-facebook' target='_blank' href='" + facebookUrl + "'></a>");

      //add twitter share
      var twitterUrl = "http://twitter.com/intent/tweet?text=" + encodeURIComponent(title) + "&url=" + encodeURIComponent(url) + "&via=ARCtalk";
      $(".articleShareContainer").append("<a class='articleShare articleShare-twitter' target='_blank' href='" + twitterUrl + "'></a>");

      //add linkedin share
      var linkedinUrl = "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(url) +"&title=" + encodeURIComponent(title) + "&summary=" + encodeURIComponent(meta);
      $(".articleShareContainer").append("<a class='articleShare articleShare-linkedin' target='_blank' href='" + linkedinUrl + "'></a>");

      var scrollTop = $('.articleShareContainer').offset().top;
      var scrollLeft = $('.articleShareContainer').offset().left;

      $(window).scroll(function(e){
        var $el = $('.articleShareContainer');
        var isPositionFixed = ($el.css('position') == 'fixed');

        if ($(this).scrollTop() > scrollTop && !isPositionFixed){
          $('.articleShareContainer').css({'position': 'fixed', 'top': '0px', 'left' : scrollLeft});
        }
        if ($(this).scrollTop() < scrollTop && isPositionFixed)
        {
          $('.articleShareContainer').css({'position': 'absolute', 'top': '60px', 'left' : '-150px'});
        }
      });


    }
  }


}

$('.owl-carousel').owlCarousel({
    center: true,
    autoplay: true,
    loop: true,
    nav: true,
    autoHeight: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 2000,
    smartSpeed:450,
    URLhashListener:true,
    autoplayHoverPause:true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    navText: [ '<img src="https://www2.arccorp.com/globalassets/homepage/redesign/arrowBlackleft.png">', '<img src="https://www2.arccorp.com/globalassets/homepage/redesign/arrowBlackright.png">'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1,

        }
    }
})

var data = {
  primaryNav: "",
  loginActive: false,
  contactActive: false,
  showSearch: false,
  formInput: ""
}

var app = new Vue({
  el: '.supernav',
  data: data,
  methods: {
    primaryNavCheck: function(item) {
      return item === this.primaryNav;
    },
    navPanelReset: function() {
      this.primaryNav = "";
    },
    navPanelSwitch: function(curNav) {
      this.primaryNav = curNav;
    },
    showPopup: function(elem) {
      if(this[elem] == false){
        if(elem == "contactActive"){
          this.loginActive = false;
        }
        else {
          this.contactActive = false;
        }
      }
      this[elem] = !this[elem];
    },
    hideLogin: function() {
      this.loginActive = false;
      this.contactActive = false;
    },
    hideContact: function() {
      this.contactActive = false;
    },
    toggleSearch: function() {
      if(this.showSearch == false){
        this.showSearch = true;
        this.$nextTick(() =>{
          this.$refs.search.focus();
        });
      }
      else {
        this.showSearch = false;
      }
    }
  },
  directives: {
     'click-outside': {
       bind: function(el, binding, vNode) {
         // Provided expression must evaluate to a function.
         if (typeof binding.value !== 'function') {
           const compName = vNode.context.name
           let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
           if (compName) { warn += `Found in component '${compName}'` }

           console.warn(warn)
         }
         // Define Handler and cache it on the element
         const bubble = binding.modifiers.bubble
         const handler = (e) => {
           if (bubble || (!el.contains(e.target) && el !== e.target)) {
             binding.value(e)
           }
         }
         el.__vueClickOutside__ = handler

         // add Event Listeners
         document.addEventListener('click', handler)
       },

       unbind: function(el, binding) {
         // Remove Event Listeners
         document.removeEventListener('click', el.__vueClickOutside__)
         el.__vueClickOutside__ = null

       }
     }
   }
});


if($("body").hasClass("home-page")){
  latestSliderInit();

  //techInit();
  quoteRandomize();
  productRandomize();

  $(".supernav-mobile-icon .icon-menu").click(function(){
    $(".supernav-mobile-menu").toggle();
  });
}

articleSocial(); 

if( $(".navcontainer").hasClass("signedIn") ) {
  var username = $(".navcontainer").data("username");

  $("#frmMyARCLogin").hide();
  $(".supernav-loggedin").show();

  $(".supernav-myarc-username").html(username);
}

// add social for articles
if( $("article--headline").length ) {

  //test on latest first
  if($(".btn--link.parentLink").text() == "The Latest") {

    $(".article--headline__content").prepend("<div class='socialShare'></div>");
  }
}
