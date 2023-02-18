$(document).ready(function () {
    $('.product__slider-img').slick({
        dots: true,
        arrows: false,
        asNavFor: '.product__slider-content',
        fade: true,
    });

    $('.product__slider-content').slick({
        dots: true,
        arrows: true,
        asNavFor: '.product__slider-img',
    });

    let menu = document.querySelector('.header__nav-list');
    let button = document.querySelector('.header__nav-icon');
    let body = document.querySelector('.body');
    let header = document.querySelector('.header__nav');

    button.onclick = function () {
        menu.classList.toggle('_active');
        button.classList.toggle('_active');
        body.classList.toggle('lock');
        header.classList.toggle('header__nav_right');
    };
});
