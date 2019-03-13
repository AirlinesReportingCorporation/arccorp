/* reading time script start */
!function(e){e.fn.readingTime=function(n){var t={readingTimeTarget:".eta",wordCountTarget:null,wordsPerMinute:270,round:!0,lang:"en",lessThanAMinuteString:"",prependTimeString:"",prependWordString:"",remotePath:null,remoteTarget:null,success:function(){},error:function(){}},i=this,r=e(this);i.settings=e.extend({},t,n);var a=i.settings;if(!this.length)return a.error.call(this),this;if("it"==a.lang)var s=a.lessThanAMinuteString||"Meno di un minuto",l="min";else if("fr"==a.lang)var s=a.lessThanAMinuteString||"Moins d'une minute",l="min";else if("de"==a.lang)var s=a.lessThanAMinuteString||"Weniger als eine Minute",l="min";else if("es"==a.lang)var s=a.lessThanAMinuteString||"Menos de un minuto",l="min";else if("nl"==a.lang)var s=a.lessThanAMinuteString||"Minder dan een minuut",l="min";else if("sk"==a.lang)var s=a.lessThanAMinuteString||"Menej neÅ¾ minÃºtu",l="min";else if("cz"==a.lang)var s=a.lessThanAMinuteString||"MÃ©nÄ› neÅ¾ minutu",l="min";else if("hu"==a.lang)var s=a.lessThanAMinuteString||"Kevesebb mint egy perc",l="perc";else var s=a.lessThanAMinuteString||"Less than a minute",l="min";var u=function(n){if(""!==n){var t=n.trim().split(/\s+/g).length,i=a.wordsPerMinute/60,r=t/i;if(a.round===!0)var u=Math.round(r/60);else var u=Math.floor(r/60);var g=Math.round(r-60*u);if(a.round===!0)e(a.readingTimeTarget).text(u>0?a.prependTimeString+u+" "+l:a.prependTimeString+s);else{var o=u+":"+g;e(a.readingTimeTarget).text(a.prependTimeString+o)}""!==a.wordCountTarget&&void 0!==a.wordCountTarget&&e(a.wordCountTarget).text(a.prependWordString+t),a.success.call(this)}else a.error.call(this,"The element is empty.")};r.each(function(){null!=a.remotePath&&null!=a.remoteTarget?e.get(a.remotePath,function(n){u(e("<div>").html(n).find(a.remoteTarget).text())}):u(r.text())})}}(jQuery);
/* reading time script end */

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
    if($(".btn--link.parentLink").text() == "The Latest" || $(".btn--link.parentLink").text() == "Case Studies" || $(".custom-brow span").text() == "Highlights") {
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
