
var msnry = new Masonry( '.container', {
    columnWidth: '.item.w2',
    percentPosition: true,
    "gutter": 5 
});

function getHref(href) {
  return (href.indexOf('youtube') == -1 ? 'image' : 'swf');
} 

$(".fancybox").click(function () {
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