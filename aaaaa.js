jQuery(function(){


/*المشغل رقم-01-https://www.youtube.com*/
 jQuery('.post-header a[href*="https://www.youtube.com/watch?"]').each(function(){
      var ytid = jQuery(this).attr('href').split("v=")[1].split("&")[0];                               
      jQuery(this).html("<a href='https://www.youtube.com/embed/"+ytid+"' target=_blank><img src='https://i.servimg.com/u/f37/18/22/98/96/210.png' border=0></a>") 
  });
  
});
