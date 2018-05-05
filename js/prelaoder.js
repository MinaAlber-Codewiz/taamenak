// WHILE PAGE IS LOADING
$(window).on('load', function(){

    // CACHE DOM ELEMENTS
    var preloader = $('.preloader');

    setTimeout(function(){
        preloader.fadeOut(1000);
    },1000);

});
