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

$(document).ready(function() {
    // Cookie
    let cookie = false;
    let cookieContent = $('.cookie-disclaimer');

    checkCookie();

    if (cookie === true) {
        cookieContent.hide();
    }

    function setCookie(cname, cvalue, exdays) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    function getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
        }
        return "";
    }

    function checkCookie() {
        let check = getCookie("acookie");
        if (check !== "") {
            return cookie = true;
        } else {
            return cookie = false; //setCookie("acookie", "accepted", 365);
        }
    }

    $('.accept-cookie').click(function () {
        setCookie("acookie", "accepted", 365);
        cookieContent.hide(500);
    });
});