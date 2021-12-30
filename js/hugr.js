jQuery(function($) {

    'use strict';

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

    // Sliders
    (function () {
        // Basic Navigation
        let $frame = $('#revievs');
        let $slidee = $frame.children('ul').eq(0);
        let $wrap = $frame.parent();
        // Call Sly on frame
        $frame.sly({
            horizontal: 1, 
            itemNav: 'basic', 
            smart: 1, 
            activateOn: 'click', 
            mouseDragging: 1, 
            touchDragging: 1, 
            releaseSwing: 1, 
            startAt: 3, 
            scrollBar: $wrap.find('.scrollbar'), 
            scrollBy: 1, 
            pagesBar: $wrap.find('.pages'), 
            activatePageOn: 'click', 
            speed: 300, 
            elasticBounds: 1, 
            easing: 'easeOutExpo', 
            dragHandle: 1, 
            dynamicHandle: 1, 
            clickBar: 1, 
            // Buttons
            forward: $wrap.find('.forward'), 
            backward: $wrap.find('.backward'), 
            prev: $wrap.find('.prev'), 
            next: $wrap.find('.next'), 
            prevPage: $wrap.find('.prevPage'), 
            nextPage: $wrap.find('.nextPage')
        });
        // Add item
        $wrap.find('.add').on('click', function () {
            $frame.sly('add', '<li>' + $slidee.children().length + '</li>');
        });
    }());

    (function () {
        // Basic Navigation
        let $frame = $('#services');
        let $slidee = $frame.children('ul').eq(0);
        let $wrap = $frame.parent();
        // Call Sly on frame
        $frame.sly({
            horizontal: 1, 
            itemNav: 'basic', 
            smart: 1, 
            activateOn: 'click', 
            mouseDragging: 1, 
            touchDragging: 1, 
            releaseSwing: 1, 
            startAt: 3, 
            scrollBar: $wrap.find('.scrollbar'), 
            scrollBy: 1, 
            pagesBar: $wrap.find('.pages'), 
            activatePageOn: 'click', 
            speed: 300, 
            elasticBounds: 1, 
            easing: 'easeOutExpo', 
            dragHandle: 1, 
            dynamicHandle: 1, 
            clickBar: 1, 
            // Buttons
            forward: $wrap.find('.forward'), 
            backward: $wrap.find('.backward'), 
            prev: $wrap.find('.prev'), 
            next: $wrap.find('.next'), 
            prevPage: $wrap.find('.prevPage'), 
            nextPage: $wrap.find('.nextPage')
        });
        // Add item
        $wrap.find('.add').on('click', function () {
            $frame.sly('add', '<li>' + $slidee.children().length + '</li>');
        });
    }());
});