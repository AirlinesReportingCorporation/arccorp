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

!function(e){e.fn.readingTime=function(n){var t={readingTimeTarget:".eta",wordCountTarget:null,wordsPerMinute:270,round:!0,lang:"en",lessThanAMinuteString:"",prependTimeString:"",prependWordString:"",remotePath:null,remoteTarget:null,success:function(){},error:function(){}},i=this,r=e(this);i.settings=e.extend({},t,n);var a=i.settings;if(!this.length)return a.error.call(this),this;if("it"==a.lang)var s=a.lessThanAMinuteString||"Meno di un minuto",l="min";else if("fr"==a.lang)var s=a.lessThanAMinuteString||"Moins d'une minute",l="min";else if("de"==a.lang)var s=a.lessThanAMinuteString||"Weniger als eine Minute",l="min";else if("es"==a.lang)var s=a.lessThanAMinuteString||"Menos de un minuto",l="min";else if("nl"==a.lang)var s=a.lessThanAMinuteString||"Minder dan een minuut",l="min";else if("sk"==a.lang)var s=a.lessThanAMinuteString||"Menej neÅ¾ minÃºtu",l="min";else if("cz"==a.lang)var s=a.lessThanAMinuteString||"MÃ©nÄ› neÅ¾ minutu",l="min";else if("hu"==a.lang)var s=a.lessThanAMinuteString||"Kevesebb mint egy perc",l="perc";else var s=a.lessThanAMinuteString||"Less than a minute",l="min";var u=function(n){if(""!==n){var t=n.trim().split(/\s+/g).length,i=a.wordsPerMinute/60,r=t/i;if(a.round===!0)var u=Math.round(r/60);else var u=Math.floor(r/60);var g=Math.round(r-60*u);if(a.round===!0)e(a.readingTimeTarget).text(u>0?a.prependTimeString+u+" "+l:a.prependTimeString+s);else{var o=u+":"+g;e(a.readingTimeTarget).text(a.prependTimeString+o)}""!==a.wordCountTarget&&void 0!==a.wordCountTarget&&e(a.wordCountTarget).text(a.prependWordString+t),a.success.call(this)}else a.error.call(this,"The element is empty.")};r.each(function(){null!=a.remotePath&&null!=a.remoteTarget?e.get(a.remotePath,function(n){u(e("<div>").html(n).find(a.remoteTarget).text())}):u(r.text())})}}(jQuery);

function latestSliderInit(){

  $(".homePageGrid .content-block--pageItem__inside").each(function(){
    var link = $(this).find(".ctaLink").prop("href");
    var subString = link.substring(link.indexOf("latest/") +7).replace("/", "");
    var imgLink = "https://www2.arccorp.com/globalassets/homepage/redesign/latest/" + subString + ".jpg";
    $(this).prepend("<a href='" + link + "'><img class='latestImage' src='"+ imgLink + "'></a>");
    $(this).append("<div class='read-more'><a href='" + link + "'>Read More</a></div>");
  });

  $(".homePageGrid .page-grid__row").eq(0).prepend("<div class='featuredLatest content-block--pageItem'><div class='featuredLatestImage'><a href='https://arctravelconnect.com/' target='_blank'><img src='https://www2.arccorp.com/globalassets/homepage/redesign/featured-lastest-travelconnect.png'></a></div></div>");

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
    navText: [ '<img src="https://www2.arccorp.com/globalassets/homepage/redesign/latestArrowLeft.png">', '<img src="https://www2.arccorp.com/globalassets/homepage/redesign/latestArrowRight.png">']
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


function readingTime(){
  if( $(".article--headline").length ) {
    $(".author-byline .metadata").append('<li><span class="eta"></span> Read (<span class="word-count"></span> Words)</li>');
    $(".article-body").readingTime({wordCountTarget: ".word-count"});
  }
}

function articleResize(scrollTop, scrollLeft, resize) {
  if( $(".article--headline").length ) {
    var $el = $('.articleShareContainer');
    var isPositionFixed = ($el.css('position') == 'fixed');
    var windowWidth = $(window).width();

    var offset = $(".basic-text-inside").eq(0).offset().left;

    if(parseInt(windowWidth) > 1169){
      if ($(window).scrollTop() > scrollTop && !isPositionFixed){
          $('.articleShareContainer').css({'position': 'fixed', 'top': '0px', 'left' : (offset - 150) + 'px'});
      }
      else if ($(window).scrollTop() < scrollTop && isPositionFixed)
      {

        $('.articleShareContainer').css({'position': 'absolute', 'top': '60px', 'left' : '-150px'});
      }
      else if(isPositionFixed){
        $('.articleShareContainer').css({'position': 'fixed', 'top': '0px', 'left' : (offset - 150) + 'px'});
      }
    }

  }
}

function articleSocial() {  
  // add social for articles
  if( $(".article--headline").length ){

    //test on latest first & case studies
    if($(".btn--link.parentLink").text() == "The Latest" || $(".btn--link.parentLink").text() == "Case Studies") {
      var url = window.location.href;
      var meta = $("meta[name='description']").prop("content");
      var title = $("h1.mainTitle").text();

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

      var scrollTop = $('.basic-text-inside').eq(0).offset().top;
      var scrollLeft = $(".basic-text-inside").eq(0).offset().left;

      $(window).scroll(function(){
        articleResize(scrollTop, scrollLeft);
      });

      $(window).resize(function(){
        console.log('hit');
        scrollTop = $('.basic-text-inside').eq(0).offset().top;
        scrollLeft = $('.basic-text-inside').eq(0).offset().left;
        articleResize(scrollTop, scrollLeft);
      });



    }
  }


}//end articleSocial

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
    navText: [ '<img src="https://www2.arccorp.com/globalassets/homepage/redesign/latestArrowLeft.png">', '<img src="https://www2.arccorp.com/globalassets/homepage/redesign/latestArrowRight.png">'],
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
    },
    onInitialize : function(element){
        $('.owl-carousel').children().sort(function(){
            return Math.round(Math.random()) - 0.5;
        }).each(function(){
            $(this).appendTo($('.owl-carousel'));
        });
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


//functions for just the homepage
if($("body").hasClass("home-page")){
  latestSliderInit();
  quoteRandomize();
  productRandomize();
}

articleSocial();
readingTime();

$(".supernav-mobile-icon .icon-menu").click(function(){
  $(".supernav-mobile-menu").toggle();
  if($(".supernav-mobile-menu").css("display") == "none"){
    console.log(true);
    $(".supernav-sub").hide();
  }
});

//function for sign-in
if( $(".navcontainer").hasClass("signedIn") ) {
  var username = $(".navcontainer").data("username");

  $("#frmMyARCLogin").hide();
  $(".supernav-loggedin").show();

  $(".supernav-myarc-username").html(username);
}
