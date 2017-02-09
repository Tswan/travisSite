
//$(document).ready(setTimeout(function() {gridInit(); }, 1000));
//$(document).ready(function() {gridInit();});
/*if (window.addEventListener)
  window.addEventListener("load", gridInit(), false);
else if (window.attachEvent)
  window.attachEvent("onload", gridInit());
else window.onload = gridInit();*/

//function gridInit() {
var $grid = $('.container').masonry( {
    columnWidth: '.item.w2',
    percentPosition: true,
    "gutter": 5 
});
$grid.imagesLoaded().progress(function()
{
  $grid.masonry();
});

function getHref(href) {
  return (href.indexOf('youtube') == -1 ? 'image' : 'iframe');
} 

$('.fancybox').click(function () {
  if (!this.nextSibling) {
    return;
  }

  $('.item').fancybox({
    'padding'       : 0,
    'autoScale'     : true,
    'autoDimensions': true,
    'fitToView'       : true,
    'transitionIn'  : 'none',
    'transitionOut' : 'none',
    prevEffect : 'none',
    nextEffect : 'none',
    arrows : true,
    'title'         : this.title,
    'swf'           : {
    'wmode'        : 'transparent',
    'allowfullscreen'   : 'true'
    },
    helpers : {
    media : {},
    buttons : {}
    },beforeLoad : function(){
    this.type = getHref(this.href);
      if(this.type != 'image') 
      {
        this.width = $(window).width();
        this.height = $(window).width()/2;
      }
    },afterLoad :
    function (){
      if(this.type != 'image') 
      {
        this.width = $(window).width();
        this.height = $(window).width()/2;
      }
    }
  });
});

$.getJSON("js/data.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});
bodymovin.loadAnimation({
  container: document.getElementById('Github'), // the dom element
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'img/Github/data.json' // the animation data
});
bodymovin.loadAnimation({
  container: document.getElementById('Resume'), // the dom element
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'img/Resume/data.json' // the animation data
});
bodymovin.loadAnimation({
  container: document.getElementById('Linkedin'), // the dom element
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'img/Linkedin/data.json' // the animation data
});
bodymovin.loadAnimation({
  container: document.getElementById('Email'), // the dom element
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'img/Email/data.json' // the animation data
});
//} 