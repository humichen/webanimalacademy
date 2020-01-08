$(function(){
  if(window.screen.width>768){
          $('.nav-list-item1').click(function(){
        $(this).css('width','90px').css('height','77px').css('background-size','80px 67px').css('margin-left','17.5px').css('margin-top','2.5px').css('margin-right','2.5px');
      });  
      $('.nav-list-item2').click(function(){
        $(this).css('width','90px').css('height','77px').css('background-size','80px 67px').css('margin-left','17.5px').css('margin-top','2.5px').css('margin-right','2.5px');
      }); 
      $('.nav-list-item3').click(function(){
        $(this).css('width','90px').css('height','77px').css('background-size','80px 67px').css('margin-left','17.5px').css('margin-top','2.5px').css('margin-right','2.5px');
      }); 
      $('.nav-list-item4').click(function(){
        $(this).css('width','90px').css('height','77px').css('background-size','80px 67px').css('margin-left','17.5px').css('margin-top','2.5px').css('margin-right','2.5px');
      }); 
      $('.nav-list-item5').click(function(){
        $(this).css('width','90px').css('height','77px').css('background-size','80px 67px').css('margin-left','17.5px').css('margin-top','2.5px').css('margin-right','2.5px');
      }); 
  }
  else if(window.screen.width>425){
    $('.nav-list-item1').click(function(){
      $(this).css('width','81px').css('height','70.2px').css('background-size','71px 60.2px').css('margin-left','20px').css('margin-top','2.5px').css('margin-right','5px');
    });  
    $('.nav-list-item2').click(function(){
      $(this).css('width','81px').css('height','70.2px').css('background-size','71px 60.2px').css('margin-left','20px').css('margin-top','2.5px').css('margin-right','5px');
    }); 
    $('.nav-list-item3').click(function(){
      $(this).css('width','81px').css('height','70.2px').css('background-size','71px 60.2px').css('margin-left','20px').css('margin-top','2.5px').css('margin-right','5px');
    }); 
    $('.nav-list-item4').click(function(){
      $(this).css('width','81px').css('height','70.2px').css('background-size','71px 60.2px').css('margin-left','20px').css('margin-top','2.5px').css('margin-right','5px');
    }); 
    $('.nav-list-item5').click(function(){
      $(this).css('width','81px').css('height','70.2px').css('background-size','71px 60.2px').css('margin-left','20px').css('margin-top','2.5px').css('margin-right','5px');
    }); 
  }
  else{
    $('.nav-list-item1').click(function(){
      $(this).css('width','55px').css('height','47.6px').css('background-size','45px 37.6px').css('margin-left','10px').css('margin-top','2.5px').css('margin-right','-10px');
    });  
    $('.nav-list-item2').click(function(){
      $(this).css('width','55px').css('height','47.6px').css('background-size','45px 37.6px').css('margin-left','12px').css('margin-top','2.5px').css('margin-right','-4px');
    }); 
    $('.nav-list-item3').click(function(){
      $(this).css('width','55px').css('height','47.6px').css('background-size','45px 37.6px').css('margin-left','12px').css('margin-top','2.5px').css('margin-right','-4px');
    }); 
    $('.nav-list-item4').click(function(){
      $(this).css('width','55px').css('height','47.6px').css('background-size','45px 37.6px').css('margin-left','12px').css('margin-top','2.5px').css('margin-right','-4px');
    }); 
    $('.nav-list-item5').click(function(){
      $(this).css('width','55px').css('height','47.6px').css('background-size','45px 37.6px').css('margin-left','12px').css('margin-top','2.5px').css('margin-right','-4px');
    }); 
  }
      $("#gotop").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },333);
      });
      if(window.screen.width>320){
      $(window).scroll(function() {
        if ( $(this).scrollTop() > 300 ){
          $('#gotop').fadeIn(222);
        } else {
          $('#gotop').stop().fadeOut(222);
        }
        if ( $(this).scrollTop() > 300 ){
          $('.leavebutton').css('opacity','0.4').css('transition','.3s');
          $('.leavebutton').mouseover(function() {
            $(this).css('opacity','1').css('transition','.3s');
          });
          $('.leavebutton').mouseout(function() {
            $(this).css('opacity','0.4').css('transition','.3s');
          });
        } else {
          $('.leavebutton').css('opacity','1').css('transition','.3s');
        }
      }).scroll();
      }
      else{
        $('#gotop').css('opacity','0');
      }
});