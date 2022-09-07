// Burger menu
const burger = document.querySelector('.menu__mbl');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

burger.addEventListener("click", function() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
})

// Dropdown
const dropdownLink = document.querySelector('.hasDropdown');
const dropdown = document.querySelector('.dropdown');

dropdownLink.addEventListener("click", function() {
    dropdown.classList.toggle('opened');
    dropdownLink.classList.toggle('opened');
})

// Partners slider
new Swiper (".partnersSwiper", {
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
let newsWidth = $('.news').width();
if (newsWidth > 499) {
new Swiper(".newsSwiper", {
    loop: true,
    slidesPerView: 1,

    navigation: {
        nextEl: ".news__nav--next",
        prevEl: ".news__nav--prev",
    },

    breakpoints: {
        499: {
            slidesPerView: 1,
        },

        899: {
            slidesPerView: 2,
        },

        1399: {
            slidesPerView: 3,
        },

    }
});
} else {
    new Swiper(".newsSwiperMbl", {
        loop: true,
        slidesPerView: 1,
    
        navigation: {
            nextEl: ".news__nav--next--mbl",
            prevEl: ".news__nav--prev--mbl",
        },
    });
}

// About
$(document).ready(function () {
    $("#phone").mask("+7 (999)999-99-99", {
    autoclear: false
});
});

// Footer
let t;
function up() {
	let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('up()',15);
	} else clearTimeout(t);
	return false;
}