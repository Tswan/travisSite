
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

var _intro = document.getElementById('Intro');
var _github = document.getElementById('Github');
var _resume = document.getElementById('Resume');
var _linkedin = document.getElementById('Linkedin');
var _email = document.getElementById('Email');

var intro = bodymovin.loadAnimation({
  container: _intro, // the dom element
  renderer: 'svg',
  loop: false,
  prerender: false,
  autoplay: false,
  autoloadSegments: false,
  path: 'img/Intro/data.json'
});

var github = bodymovin.loadAnimation({
  container: _github, // the dom element
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'img/Github/data.json' // the animation data
});

var resume = bodymovin.loadAnimation({
  container: _resume, // the dom element
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'img/Resume/data.json' // the animation data
});

var linkedin = bodymovin.loadAnimation({
  container: _linkedin, // the dom element
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'img/Linkedin/data.json' // the animation data
});

var email = bodymovin.loadAnimation({
  container: _email, // the dom element
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'img/Email/data.json' // the animation data
});

var intro_fade = false;
intro.addEventListener('DOMLoaded', function () {//animate in
            intro.playSegments([0,40],true);
        });

$('.parallax').scroll( function() {
    
    if(getViewportOffset($('#Intro')).top < ($(window).height()*0.05))
    {
      if (!intro_fade) {
        intro_fade = true;
        intro.playSegments([40,60],true);
      }

    } else if (getViewportOffset($('#Intro')).top > ($(window).height()*0.28))
    {
      if (intro_fade) {
        intro_fade = false;
        intro.playSegments([0,40],true);
      }

    }
});

github_pause = true;
_github.addEventListener('mouseover', githubButtonOver);

github.addEventListener('loopComplete',function(){
  if(github_pause){
    console.log('paused');
    github.pause();
  }
});
  
function githubButtonOver(){
  github.play();
  github_pause = false;
  console.log('played');
  setTimeout(function() {
    document.addEventListener('mouseover', githubButtonOut);
  }, 0);
  _github.removeEventListener('mouseover', githubButtonOver);
}

function githubButtonOut(ev){
  if(!checkIfChild(ev.target, _github)){
    console.log('trying paused');
    github_pause = true;
    document.removeEventListener('mouseover', githubButtonOut);
    _github.addEventListener('mouseover', githubButtonOver);
  }
}

resume_pause = true;
_resume.addEventListener('mouseover', resumeButtonOver);

resume.addEventListener('loopComplete',function(){
  if(resume_pause){
    console.log('paused');
    resume.pause();
  }
});
  
function resumeButtonOver(){
  resume.play();
  resume_pause = false;
  console.log('played');
  setTimeout(function() {
    document.addEventListener('mouseover', resumeButtonOut);
  }, 0);
  _resume.removeEventListener('mouseover', resumeButtonOver);
}

function resumeButtonOut(ev){
  if(!checkIfChild(ev.target, _resume)){
    console.log('trying paused');
    resume_pause = true;
    document.removeEventListener('mouseover', resumeButtonOut);
    _resume.addEventListener('mouseover', resumeButtonOver);
  }
}

linkedin_pause = true;
_linkedin.addEventListener('mouseover', linkedinButtonOver);

linkedin.addEventListener('loopComplete',function(){
  if(linkedin_pause){
    console.log('paused');
    linkedin.pause();
  }
});
  
function linkedinButtonOver(){
  linkedin.play();
  linkedin_pause = false;
  console.log('played');
  setTimeout(function() {
    document.addEventListener('mouseover', linkedinButtonOut);
  }, 0);
  _linkedin.removeEventListener('mouseover', linkedinButtonOver);
}

function linkedinButtonOut(ev){
  if(!checkIfChild(ev.target, _linkedin)){
    console.log('trying paused');
    linkedin_pause = true;
    document.removeEventListener('mouseover', linkedinButtonOut);
    _linkedin.addEventListener('mouseover', linkedinButtonOver);
  }
}

email_pause = true;
_email.addEventListener('mouseover', emailButtonOver);

email.addEventListener('loopComplete',function(){
  if(email_pause){
    console.log('paused');
    email.pause();
  }
});
  
function emailButtonOver(){
  email.play();
  email_pause = false;
  console.log('played');
  setTimeout(function() {
    document.addEventListener('mouseover', emailButtonOut);
  }, 0);
  _email.removeEventListener('mouseover', emailButtonOver);
}

function emailButtonOut(ev){
  if(!checkIfChild(ev.target, _email)){
    console.log('trying paused');
    email_pause = true;
    document.removeEventListener('mouseover', emailButtonOut);
    _email.addEventListener('mouseover', emailButtonOver);
  }
}

function checkIfChild(elem, parent) {
  while (elem.parentNode) {
    if (elem.parentNode === parent) {
      return true;
    }
    elem = elem.parentNode;
  }
  return false;
}

function getViewportOffset($e) {
  var $window = $(window),
    scrollLeft = $window.scrollLeft(),
    scrollTop = $window.scrollTop(),
    offset = $e.offset(),
    rect1 = { x1: scrollLeft, y1: scrollTop, x2: scrollLeft + $window.width(), y2: scrollTop + $window.height() },
    rect2 = { x1: offset.left, y1: offset.top, x2: offset.left + $e.width(), y2: offset.top + $e.height() };
  return {
    left: offset.left - scrollLeft,
    top: offset.top - scrollTop,
    insideViewport: rect1.x1 < rect2.x2 && rect1.x2 > rect2.x1 && rect1.y1 < rect2.y2 && rect1.y2 > rect2.y1
  };
}
