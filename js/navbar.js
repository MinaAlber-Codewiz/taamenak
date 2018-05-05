// WHEN PAGE IS SUCCESSFULLY LOADED
$(document).ready(function(){

    // CACHE DOM ELEMENTS\
    var documentPage = $('html');
    var navbar = $('.navbar');
    var hamburgerMenu = $('.mobile-hamburger-menu');
    var mobileNavbar = $('.mobile-navbar');
    var mobileNavbarContainer = $('.mobile-navbar-container');
    var closeMobileNavMenu = $('.mobile-navbar-close-btn');

    // WHEN PAGE IS SCROLLED
    $(document).scroll(function(){

        // IF SCROLLING STARTS
        if($(this).scrollTop() > 20){
            navbar.addClass('navbar-mobile-transition');
        } else {
            navbar.removeClass('navbar-mobile-transition');
        }

    });

    // WHEN HAMBURGER MENU IS CLICKED
    hamburgerMenu.click(function(){
        mobileNavbar.fadeIn();
        documentPage.addClass('remove-scrolling')
        setTimeout(function(){
            mobileNavbar.addClass('mobile-navbar-open');
        },300);
    });

    // WHEN CLOSE MOBILE NAVMENU BUTTON IS CLICKED
    closeMobileNavMenu.click(function(){
        mobileNavbar.removeClass('mobile-navbar-open');
        setTimeout(function(){
            mobileNavbar.fadeOut();
            documentPage.removeClass('remove-scrolling')
        },300);
    });

});
