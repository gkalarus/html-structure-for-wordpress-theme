// FlexSlider2
$(window).load(function () {
    $('.flexslider').flexslider({
        directionNav: false,
        slideshowSpeed: 1500
    });

    $('#menu .navbar-nav a').smoothScroll({
        offset: -55
    });

});
