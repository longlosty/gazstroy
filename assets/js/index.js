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
    slidesPerView: 2,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    autoplay: {
        delay: 2500,
      },
});

// About
const time = 1500;
const step = 1;

function incrementingNum(num, elem) {
    let result = 0;
    let t = Math.round(time / (num / step));

    let interval = setInterval( () => {
        result += step;
        if (result == num) {
            clearInterval(interval);
        }
        elem.innerHTML = result;
    },
    t);

}
const aboutYears = document.querySelector('#aboutYears');
// incrementingNum(18, aboutYears);

let scrollPos = window.scrollY;
let aboutH = document.querySelector('.about').scrollHeight + 200;

window.addEventListener("scroll", function () {;
    scrollPos = this.scrollY;
    let used = true;
    console.log(scrollPos, aboutH);
    if (scrollPos >= aboutH && used == true) {
        used = false;
        incrementingNum(18, aboutYears);
    }
    
    
})

// News slider
var swiper = new Swiper(".newsSwiper", {
    slidesPerView: 3,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
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




