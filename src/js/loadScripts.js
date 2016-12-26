if (window.addEventListener)
  window.addEventListener("load", downloadJSAtOnload(), false);
else if (window.attachEvent)
  window.attachEvent("onload", downloadJSAtOnload());
else window.onload = downloadJSAtOnload();


function downloadJSAtOnload() {
  //Loading Jquery
  loadScript('js/jquery-1.10.1.min.js',function(){
    //Loading masonry package
    loadScript('js/masonry.pkgd.js',function(){
      //Loading masonry
      loadScript('js/masonry.js',function(){
        //Loading init script
        loadScript('js/script.js',function(){
        });
      });
    });
    //Loading fancy box
    loadScript('js/jquery.fancybox.js',function(){
    });
  });
  

} 

function loadScript(url,callback){
  var script=document.createElement('script');
  script.type = "text/javascript";
  script.src = url;
  if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }
  document.getElementsByTagName("body")[0].appendChild(script);

}