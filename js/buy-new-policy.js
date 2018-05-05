// WHEN PAGE IS SUCCESSFULLY LOADED
$(document).ready(function(){

    // HOMEPAGE ABOUT US TILT IMAGE
    $('.tilt-homepage-about-us-img').tilt({
        maxTilt:        30,
        perspective:    2000,
        easing:         "cubic-bezier(.03,.98,.52,.99)",
        scale:          1.05,
        transition:     true,
        disableAxis:    null,
        reset:          true,
        glare:          true,
        maxGlare:       1
    });

    // HOMEPAGE STEPS TILT IMAGES
    $('.steps').tilt({
        maxTilt:        30,
        perspective:    1000,
        easing:         "cubic-bezier(.03,.98,.52,.99)",
        scale:          1,
        transition:     true,
        disableAxis:    null,
        reset:          true,
        glare:          false,
        maxGlare:       1
    });

    // HOMEPAGE CONTACT US TILT IMAGE
    $('.tilt-homepage-contact-us-img').tilt({
        maxTilt:        30,
        perspective:    2000,
        easing:         "cubic-bezier(.03,.98,.52,.99)",
        scale:          1.05,
        transition:     true,
        disableAxis:    null,
        reset:          true,
        glare:          true,
        maxGlare:       1
    });

    // HOMEPAGE PARTNERS CAROUSEL
    $('.homepage-partners-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 5,
        adaptiveHeight: true,
        responsive: [
             {
                 breakpoint: 1366,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 3
                 }
             },
             {
                 breakpoint: 800,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2
                 }
             },
             {
                 breakpoint: 500,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                 }
             }
         ]
    });

})
