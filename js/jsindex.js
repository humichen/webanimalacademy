$(document).ready(function () {
    if (window.screen.width>768 && window.screen.width>=window.screen.height) {
         $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.column-header').css('opacity', '1').css('transform','translate(0,0)').css('transition', '.50s ease');
            $('.container-list-layout').css('opacity', '1').css('transform','translate(0,0)').css('transition', '.90s ease');
        }
    }).scroll();
    }
    else{
        setTimeout(function () { $('.column-header').css('opacity', '1').css('transform','translate(0,0)').css('transition', '.50s ease');$('.container-list-layout').css('opacity', '1').css('transform','translate(0,0)').css('transition', '.90s ease'); }, 300);
    }    
   
    

    
});