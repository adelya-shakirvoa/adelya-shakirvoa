let hat = $('.hat'), 
    menu = $('.main-menu'), 
    menuBack = $('.main-menu-back'), 
    menuClose = $('.menu-close'), 
    overlay = $('.overlay');

$(window).on('scroll', function() {
    // scroll cover
    let scrollCoef = 0.0035;

    $('.cover-cont > *').css({
        opacity: 1 - $(window).scrollTop() * scrollCoef
    });
});

// for menu
hat.click(function() {
    toggleNav();
});

menuClose.click(function() {
    toggleNav();
});

function toggleNav() {
    menu.toggleClass('show');
    overlay.toggleClass('show');
}

// scroll for button
$("a.scroll-to").on("click", function(e) {

    e.preventDefault();
    let anchor = $(this).attr('href');

    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});

$("nav a.scroll-to").on("click", function(e) {
    toggleNav();
});