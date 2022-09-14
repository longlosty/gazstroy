// Burger menu
const burger = document.querySelector('.menu__mbl');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const header = document.querySelector('.page__header');
const headerInner = document.querySelector('.header__inner');

burger.addEventListener("click", function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
    header.classList.toggle('active');
    headerInner.classList.toggle('hide');

})

// Dropdown
const dropdownLink = document.querySelector('.hasDropdown');
const dropdown = document.querySelector('.dropdown');

dropdownLink.addEventListener("click", function () {
    dropdown.classList.toggle('opened');
    dropdownLink.classList.toggle('opened');
})

// Partners slider
new Swiper(".partnersSwiper", {
    slidesPerView: 1,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    autoplay: {
        delay: 2500,
    },

    breakpoints: {
        499: {
            slidesPerView: 2,
        },

        799: {
            slidesPerView: 1,
        },

        899: {
            slidesPerView: 2,
        },
    }
});

// News slider
const newsGalary = document.querySelectorAll('#news-galary .slide')

const result = ([...newsGalary]).map(el => ({
    title: el.querySelector('.news__title').innerText,
    text: el.querySelector('.news__text').innerText,
    img: el.querySelector('.news__bg').src
}))

const track = document.querySelector('.slider-dots-track')

let mySwiper = new Swiper('.newsSwiper', {
    pagination: {
        el: track,
        spaceBetween: 0,
        clickable: true,
        centeredSlides: true,
        renderBullet: function (index, className) {
            return `<div class = "block ${className}">
                <div class = "news__inner">
                    <div class="news__inner--title">${result[index].title}</div>
                    <div class="news__inner--text">${result[index].text}</div>
                    <img src = ${result[index].img} class = "news__inner--bg" />
                </div>
            </div>`;
        }
    },
    navigation: {
        nextEl: '.news__nav--next',
        prevEl: '.news__nav--prev',
    },
})

let slides = track.childNodes;
let nextSlide = slides[1];
track.style.left = -nextSlide.offsetLeft + 'px';

const newsPrev = document.querySelector('.news__nav--prev');
const newsNext = document.querySelector('.news__nav--next');

slides.forEach(function(item, i, arr) {
    let slide = i;
}); 

const dotsUpdated = () => {
    let curr = document.querySelector('.swiper-pagination-bullet-active');
    track.style.left = -curr.offsetLeft + 'px';
}

mySwiper.eventsListeners.paginationUpdate.push(dotsUpdated);

// About
$(document).ready(function () {
    $("#phone").mask("+7 (999)999-99-99", {
        autoclear: false
    });
});

// Footer
let t;
function up() {
    let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0, -100);
        t = setTimeout('up()', 15);
    } else clearTimeout(t);
    return false;
}