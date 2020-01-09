$(document).ready(function () {
    $(".energy").mouseover(function(){
        setTimeout(function () { $(".move1").css('transform', 'translate(0,-5%)').css('transition', '.3s ease') }, 300);
        setTimeout(function () { $(".move1").css('transform', 'translate(0,5%)').css('transition', '.2s ease') }, 500);
        setTimeout(function () { $(".move1").css('transform', 'translate(0,-5%)').css('transition', '.2s ease') }, 700);
        setTimeout(function () { $(".move1").css('transform', 'translate(0,5%)').css('transition', '.2s ease') }, 900);
        setTimeout(function () { $(".move1").css('transform', 'translate(0,0)').css('transition', '.2s ease') }, 1100);
    });
    $(".collect").mouseover(function(){
        setTimeout(function () { $(".move2").css('transform', 'translate(0,-5%)').css('transition', '.3s ease') }, 300);
        setTimeout(function () { $(".move2").css('transform', 'translate(0,5%)').css('transition', '.2s ease') }, 500);
        setTimeout(function () { $(".move2").css('transform', 'translate(0,-5%)').css('transition', '.2s ease') }, 700);
        setTimeout(function () { $(".move2").css('transform', 'translate(0,5%)').css('transition', '.2s ease') }, 900);
        setTimeout(function () { $(".move2").css('transform', 'translate(0,0)').css('transition', '.2s ease') }, 1100);
    });
    $(".stopping").mouseover(function(){
        setTimeout(function () { $(".move3").css('transform', 'translate(0,-5%)').css('transition', '.3s ease') }, 300);
        setTimeout(function () { $(".move3").css('transform', 'translate(0,5%)').css('transition', '.2s ease') }, 500);
        setTimeout(function () { $(".move3").css('transform', 'translate(0,-5%)').css('transition', '.2s ease') }, 700);
        setTimeout(function () { $(".move3").css('transform', 'translate(0,5%)').css('transition', '.2s ease') }, 900);
        setTimeout(function () { $(".move3").css('transform', 'translate(0,0)').css('transition', '.2s ease') }, 1100);
    });
    if((window.screen.width>768 && window.screen.width>=window.screen.height) || window.screen.width<=425){
       $(window).scroll(function () {
        if ($(this).scrollTop() >= 10) {
            setTimeout(function () { $(".img1").css('opacity', '1').css('transform', 'translate(0,0)').css('transition', '.5s ease') }, 300);
            setTimeout(function () { $(".img2").css('opacity', '1').css('transform', 'translate(0,0)').css('transition', '.5s ease') }, 600);
            setTimeout(function () { $(".img3").css('opacity', '1').css('transform', 'translate(0,0)').css('transition', '.5s ease') }, 900);
            setTimeout(function () { $(".img4").css('opacity', '1').css('transform', 'translate(0,0)').css('transition', '.5s ease') }, 1200);
            setTimeout(function () { $(".img5").css('opacity', '1').css('transform', 'translate(0,0)').css('transition', '.5s ease') }, 1500);
            setTimeout(function () { $(".img6").css('opacity', '1').css('transform', 'translate(0,0)').css('transition', '.5s ease') }, 1800);
            setTimeout(function () { $(".img7").css('opacity', '1').css('transform', 'translate(0,0)').css('transition', '.5s ease') }, 2100);
            setTimeout(function () { $(".img8").css('opacity', '1').css('transform', 'translate(0,0)').css('transition', '.5s ease') }, 2400);
            setTimeout(function () { $(".img9").css('opacity', '1').css('transform', 'translate(0,0)').css('transition', '.5s ease') }, 2700);
        }
    }).scroll(); 
    }
    else{
        setTimeout(function () { $(".img1").css('opacity', '1').css('transform', 'translate(0,0)').css('transition', '.5s ease') }, 300);
            setTimeout(function () { $(".img2").css('opacity', '1').css('transform', 'translate(0,0)').css('transition', '.5s ease') }, 600);
            setTimeout(function () { $(".img3").css('opacity', '1').css('transform', 'translate(0,0)').css('transition', '.5s ease') }, 900);
            setTimeout(function () { $(".img4").css('opacity', '1').css('transform', 'translate(0,0)').css('transition', '.5s ease') }, 1200);
            setTimeout(function () { $(".img5").css('opacity', '1').css('transform', 'translate(0,0)').css('transition', '.5s ease') }, 1500);
            setTimeout(function () { $(".img6").css('opacity', '1').css('transform', 'translate(0,0)').css('transition', '.5s ease') }, 1800);
            setTimeout(function () { $(".img7").css('opacity', '1').css('transform', 'translate(0,0)').css('transition', '.5s ease') }, 2100);
            setTimeout(function () { $(".img8").css('opacity', '1').css('transform', 'translate(0,0)').css('transition', '.5s ease') }, 2400);
            setTimeout(function () { $(".img9").css('opacity', '1').css('transform', 'translate(0,0)').css('transition', '.5s ease') }, 2700);
    }
    
        
});