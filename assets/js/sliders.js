/* MAIN PAGE - PARTNERS SECTION */

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

/* MAIN PAGE - NEWS SECTION */

// News slider
const newsGalary = document.querySelectorAll('#news-galary .slide')

const result = ([...newsGalary]).map(el => ({
    title: el.querySelector('.news__title').innerText,
    text: el.querySelector('.news__text').innerText,
    img: el.querySelector('.news__bg').src
}))

const track = document.querySelector('.slider-dots-track');

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
        disabledClass: 'news__nav-disabled',
    },
})

if (track) {
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
}


/* PRODUCT PAGE */

// Popular slider
new Swiper(".popularSwiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: '.slider_next',
        prevEl: '.slider_prev',
        disabledClass: 'slider_disabled',
    },

    breakpoints: {
        1099: {
            slidesPerView: 4,
        },

        830: {
            slidesPerView: 3,
        },

        717: {
            slidesPerView: 2.6,
        },

        657: {
            slidesPerView: 2.4,
        },

        560: {
            slidesPerView: 1.8,
        },

        500: {
            slidesPerView: 1.6,
        },

        480: {
            slidesPerView: 1.5,
        },

        440: {
            slidesPerView: 1.4,
        },

        395: {
            slidesPerView: 1.25,
        },

        350: {
            slidesPerView: 1.1,
        },

        320: {
            slidesPerView: 1,
        },
        

    }
})