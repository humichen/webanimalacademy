$(document).ready(function () {
    if ((window.screen.width>768 && window.screen.width>=window.screen.height) || window.screen.width<=425) {
        $(window).scroll(function () {
        if ($(this).scrollTop() >= 0) {
            $('.page1').css('display','block');
            $('.page1').css('opacity', '1').css('transition', '.50s ease');
        }
        if ($(this).scrollTop() >= 0.5*document.body.scrollHeight/7) {
            $('.page2').css('opacity', '1').css('transition', '.50s ease');
        }
        if ($(this).scrollTop() >= 1*document.body.scrollHeight/7) {
            $('.page3').css('opacity', '1').css('transition', '.50s ease');
        }
        if ($(this).scrollTop() >= 2*document.body.scrollHeight/7) {
            $('.page4').css('opacity', '1').css('transition', '.50s ease');
        }
        if ($(this).scrollTop() >= 2.8*document.body.scrollHeight/7) {
            $('.page5').css('opacity', '1').css('transition', '.50s ease');
        }
        if ($(this).scrollTop() >= 3.4*document.body.scrollHeight/7) {
            $('.page6').css('opacity', '1').css('transition', '.50s ease');
        }
        if ($(this).scrollTop() >= 4.3*document.body.scrollHeight/7) {
            $('.page7').css('opacity', '1').css('transition', '.50s ease');
        }
        if ($(this).scrollTop() >= 5*document.body.scrollHeight/7) {
            $('.page8').css('opacity', '1').css('transition', '.50s ease');
        }
        if ($(this).scrollTop() >= 5.5*document.body.scrollHeight/7) {
            $('.page9').css('opacity', '1').css('transition', '.50s ease');
        }
    }).scroll();
    }
    else{
        $('.page1').css('display','block');
        $('.page1').css('opacity', '1').css('transition', '.50s ease');
        $('.page2').css('display','block');
        $('.page2').css('opacity', '1').css('transition', '.50s ease');
        $('.page3').css('display','block');
        $('.page3').css('opacity', '1').css('transition', '.50s ease');
        $('.page4').css('display','block');
        $('.page4').css('opacity', '1').css('transition', '.50s ease');
        $('.page5').css('display','block');
        $('.page5').css('opacity', '1').css('transition', '.50s ease');
        $('.page6').css('display','block');
        $('.page6').css('opacity', '1').css('transition', '.50s ease');
        $('.page7').css('display','block');
        $('.page7').css('opacity', '1').css('transition', '.50s ease');
        $('.page8').css('display','block');
        $('.page8').css('opacity', '1').css('transition', '.50s ease');
        $('.page9').css('opacity', '1').css('transition', '.50s ease');
    }
    


});