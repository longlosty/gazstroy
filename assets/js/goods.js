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


// Sortings

const goods = document.querySelector('.goods_items');

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}



const rateSort = document.querySelector('#rateSort');

function rateSorting() {
    for (let i = 0; i < goods.children.length; i++) {
        for (let j = i; j < goods.children.length; j++) {
            if (+goods.children[i].getAttribute('data-rating') < +goods.children[j].getAttribute('data-rating')) {
                replacedNode = goods.replaceChild(goods.children[j], goods.children[i]);
                insertAfter(replacedNode, goods.children[i]);
            }
        }
    }

    rateSort.style.color = "#111";
}

rateSort.addEventListener('click', rateSorting);


const priceSort = document.querySelector('#priceSort');

function priceSorting() {
    
}

const nameSort = document.querySelector('#nameSort');

const isNewSort = document.querySelector('#isNewSort');






// Show more
const showMore = document.querySelector('.btn--showMore');
const productsLength = document.querySelectorAll('.goods_item').length;

let items = 12;

showMore.addEventListener('click', () => {
    items += 8;
    const array = Array.from(document.querySelector('.goods_items').children);
    const visibleItems = array.slice(0, items);

    visibleItems.forEach(el => el.classList.add('is-visible'));


    if (visibleItems.length === productsLength) {
        showMore.classList.add('hide-back');
        showMore.textContent = 'Скрыть товары';
    }

    if (showMore.classList.contains('hide-back')) {
        showMore.addEventListener('click', () => {
            visibleItems.forEach(el => el.classList.remove('is-visible'));
            showMore.classList.remove('hide-back');
            showMore.textContent = 'Загрузить ещё';
        });
    }

});