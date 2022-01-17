let hat = $('.hat'), 
    menu = $('.main-menu'), 
    menuBack = $('.main-menu-back'), 
    menuClose = $('.menu-close'), 
    overlay = $('.overlay');

const testimonials = document.querySelector('.testimonials');
const scroller = testimonials.querySelector('.scroller');
const nextBtn = testimonials.querySelector('.btn.next');
const prevBtn = testimonials.querySelector('.btn.prev');
const itemWidth = testimonials.querySelector('.item').clientWidth;

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

    toggleNav();

    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});

// Scroller
nextBtn.addEventListener('click', scrollToNextItem);
prevBtn.addEventListener('click', scrollToPrevItem);

function scrollToNextItem() {
    scroller.scrollBy({left: itemWidth, top: 0, behavior: 'smooth'});
}
function scrollToPrevItem() {
    scroller.scrollBy({left: -itemWidth, top: 0, behavior: 'smooth'});
}

function scrollToNextItem() {
    if (scroller.scrollLeft < (scroller.scrollWidth - itemWidth))
        // Позиция прокрутки расположена не в начале последнего элемента
        scroller.scrollBy({left: itemWidth, top: 0, behavior:'smooth'});
    else
        // Достигнут последний элемент. Возвращаемся к первому элементу, установив для позиции прокрутки 0
        scroller.scrollTo({left: 0, top: 0, behavior:'smooth'});
}

function scrollToPrevItem() {
    if (scroller.scrollLeft != 0)
        // Позиция прокрутки расположена не в начале последнего элемента
        scroller.scrollBy({left: -itemWidth, top: 0, behavior:'smooth'});
    else
        // Это первый элемент. Переходим к последнему элементу, установив для позиции прокрутки ширину скроллера
        scroller.scrollTo({left: scroller.scrollWidth, top: 0, behavior:'smooth'});
}

// Tabs
$(function() {
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
});

// Slider 2
document.addEventListener('DOMContentLoaded', function () {
    // инициализация слайдера
    let slider = new SimpleAdaptiveSlider('.slider', {
        loop: false, 
        autoplay: false, 
        interval: 5000, 
        swipe: false,
    });
});