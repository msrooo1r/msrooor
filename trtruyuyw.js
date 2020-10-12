jQuery(function(){
  var ancho = "";
  var alto = "";
jQuery('.post-body a[href^="https://www.youtube.com/watch"][href*="v="]').each(function(){var a=$(this);var b=a.attr('href').slice(a.attr('href').indexOf('v=')+2,a.attr('href').indexOf('v=')+13);if(a.attr('href').indexOf('list=')!=-1){var c=a.attr('href').slice(a.attr('href').indexOf('list=')+5)+'&';var d=c.slice(0,c.indexOf('&'));a.replaceWith("<p align='center'><a style='position: relative' class='fancy-ytbaudai fancybox.iframe' href='https://www.youtube.com/embed/videoseries?list="+d+"'><img class='not-fancyImg' src='http://i1.ytimg.com/vi/"+b+"/0.jpg' /><span class='iconPlayer'></span></a></p>")}else{a.replaceWith("<p align='center'><a style='position: relative' class='fancy-ytbaudai fancybox.iframe' href='https://www.youtube.com/embed/"+b+"?modestbranding=1&ps=play&vq=large&rel=0&autohide=1&showinfo=1&authuser=0'><img class='not-fancyImg' src='http://i1.ytimg.com/vi/"+b+"/0.jpg' /><span class='iconPlayer'></span></a></p>")}});$('.not-fancyImg, .signature_div img').fadeIn(300);$('.fancy-ytbaudai').fancybox({width:853,height:480,fitToView:false,autoSize:false,closeClick:false,openEffect:"none",closeEffect:"none"});
 
  });
  
