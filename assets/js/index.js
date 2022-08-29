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
new Swiper (".mySwiper", {
    slidesPerView: 2,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    autoplay: {
        delay: 2500,
      },
});