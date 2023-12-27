$(document).ready(function () {
    $("#test").owlCarousel({
        items: 1,
        dots: false,
        loop:true,
        autoplay: true,
        autoplayTimeout: 3000,
    });
    $("#test1").owlCarousel({
        items: 4,
        margin: 10,
        nav: true,
        dots:false,
    });
    $("#test2").owlCarousel({
        items: 1,
        dots: false,
        loop:true,
        autoplay: true,
        autoplayTimeout: 3000,
    });
    $(".owl-carousel").owlCarousel({
        items: 3,
        margin: 15,
        dots: false,
        nav: true,
    });
    
});

