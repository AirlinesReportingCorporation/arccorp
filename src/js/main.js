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

/*
function latestSliderInit(){
  $(".homePageGrid .page-grid__row").eq(0).prepend("<div class='featuredLatest content-block--pageItem'><img src='https://intg-epi01.arcnp.com/globalassets/homepage/redesign/test2.png'><div class='featuredContent'><p>2018 Trends<br/> in Airline Data</p><a href='#'>Call To Action <i class='icon-right-arrow'></i></a></div></div>");
  var sliderDistance = $(".homePageGrid .page-grid__row").outerWidth() / 3.0;
  var windowWidth = $(".homePageGrid .page-grid__content").outerWidth();



  $(".content-block--pageItem__inside").prepend("<img src='https://intg-epi01.arcnp.com/globalassets/homepage/redesign/test.jpg'>");

  $(".homePageGrid .page-grid__row").each(function(){

    $(this).find(".content-block--pageItem").each(function(){
      //console.log($(this).outerWidth());
      latestSliderWidth += $(this).outerWidth();
    });



    var myHeight = $(this).find('.content-block--pageItem').height();

    if(myHeight > maxSliderHeight){
      maxSliderHeight = myHeight;
    }
  });

  $(".homePageGrid .page-grid__content").append("<div class='latestArrowRight'><img src='https://intg-epi01.arcnp.com/globalassets/homepage/redesign/latestArrowRight.png'></div><div class='latestArrowLeft'><img src='https://intg-epi01.arcnp.com/globalassets/homepage/redesign/latestArrowLeft.png'></div>");

  $(".latestArrowLeft").click(function(){
    var leftmargin = $(".homePageGrid .page-grid__items").css('margin-left');
    leftmargin = parseInt(leftmargin.replace('px', ''));
    //console.log(leftmargin);


    if(leftmargin < sliderDistance && leftmargin < 0){
      $(".homePageGrid .page-grid__items").stop(true, true).animate({
        marginLeft: '+=' + sliderDistance + 'px'
      }, 200);
      latestSliderPosition -= sliderDistance;
    }
  });

  $(".latestArrowRight").click(function(){
    var leftmargin = $(".homePageGrid .page-grid__items").css('margin-left');
    //console.log(leftmargin);

    if(latestSliderPosition < Math.abs(windowWidth - latestSliderWidth)){
      $(".homePageGrid .page-grid__items").stop(true, true).animate({
        marginLeft: '-=' + sliderDistance + 'px'
      }, 200);
      latestSliderPosition += sliderDistance;
    }

  });
}
*/

function latestSliderInit(){
  //$(".homePageGrid .page-grid__row").eq(0).before("<div class='page-grid__row page-grid__row--3 clearfix' data-page-grid='row'><div class='featuredLatest content-block--pageItem'><div class='featuredLatestImage'><img src='https://intg-epi01.arcnp.com/globalassets/homepage/redesign/test2.png'></div><div class='featuredContent'><p>2018 Trends<br/> in Airline Data</p><a href='#'>Call To Action <i class='icon-right-arrow'></i></a></div></div></div>");

  $(".homePageGrid .page-grid__row").eq(0).prepend("<div class='featuredLatest content-block--pageItem'><div class='featuredLatestImage'><img src='https://intg-epi01.arcnp.com/globalassets/homepage/redesign/test2.png'></div><div class='featuredContent'><p>2018 Trends<br/> in Airline Data</p><a href='#'>Call To Action <i class='icon-right-arrow'></i></a></div></div>");

  $(".content-block--pageItem__inside").prepend("<img src='https://intg-epi01.arcnp.com/globalassets/homepage/redesign/test.jpg'>");

  $('.page-grid__items.page-grid__items--expanded').addClass("owl-carousel").addClass("owl-theme");

  $(".page-grid__row").each(function(index){
    $(this).prop("data-hash", index);
  });

  $('.page-grid__items.page-grid__items--expanded').owlCarousel({
    loop: true,
    dots: true,
    items: 1,
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
    }
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



$('.owl-carousel').owlCarousel({
    center: true,
    autoplay: true,
    loop: true,
    nav: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    autoplaySpeed: 2000,
    smartSpeed:450,
    URLhashListener:true,
    autoplayHoverPause:true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    navText: [ '<img src="https://www2.arccorp.com/globalassets/homepage/redesign/arrowwhiteleft.png">', '<img src="https://www2.arccorp.com/globalassets/homepage/redesign/arrowwhiteright.png">'],
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
/*
var techApp = new Vue({
  el: '.techPanel',
  data: {
    pullDown: ""
  },
  methods: {
    techReset: function() {
      this.pullDown = "";
    },
    techSwitch: function(curNav) {
      if(this.pullDown == curNav){
        this.techReset();
      }
      else {
        this.pullDown = curNav;
      }
    }
  }
});*/

if($("body").hasClass("home-page")){
  latestSliderInit();

  //techInit();
  quoteRandomize();
  productRandomize();
}
