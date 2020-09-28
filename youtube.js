jQuery(function(){

  var ancho = "550";
  var alto = "315";

 jQuery('.post-body a[href*="https://www.youtube.com/watch"]').each(function(){
      var ytid = jQuery(this).attr('href').split("v=")[1].split("&")[0];                               
      jQuery(this).html("<iframe class=msrooordailymotion width="+ancho+" height="+alto+" src='https://www.youtube.com/embed/"+ytid+"?rel=0;showinfo=0 frameborder=0 allow='autoplay; encrypted-media allowfullscreen></iframe><br><a href='https://en.savefrom.net/16/#url=https://www.youtube.com/watch?v="+ytid+"' target='_blank'>لتحميل الفيديو أضغط هنا </a> |<br>") 
  });
  
});
