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

// Show more
const showMore = document.querySelector('.btn--showMore');
const productsLength = document.querySelectorAll('.gallery_item').length;

let items = 6;

showMore.addEventListener('click', () => {
    items += 6;
    const array = Array.from(document.querySelector('.gallery_content').children);
    const visibleItems = array.slice(0, items);

    visibleItems.forEach(el => el.classList.add('is-visible'));


    if (visibleItems.length === productsLength) {
        showMore.classList.add('hide-back');
        showMore.textContent = 'Скрыть фотографии';
    }

    if (showMore.classList.contains('hide-back')) {
        showMore.addEventListener('click', () => {
            visibleItems.forEach(el => el.classList.remove('is-visible'));
            showMore.classList.remove('hide-back');
            showMore.textContent = 'Загрузить ещё';
        });
    }

});




