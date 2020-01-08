$(document).ready(function () {

    let openingAnimWindow = document.querySelector('#spinner');
    let openingAnimData = {
        container: openingAnimWindow,
        animType: 'svg',
        loop: true,
        prerender: true,
        autoplay: true,
        path: 'json/loading.json'   //我自己設計的json檔
    };
    let openingAnim = bodymovin.loadAnimation(openingAnimData);
    openingAnim.play();
    

     let openingAnimWindow2 = document.querySelector('#openingLottie2');
     let openingAnimData2 = {
         container: openingAnimWindow2,
         animType: 'svg',
         loop: true,
         prerender: true,
         autoplay: true,
         path: 'json/banner.json'   //我自己設計的json檔
     };
     let openingAnim2 = bodymovin.loadAnimation(openingAnimData2);
      openingAnim2.play();
});