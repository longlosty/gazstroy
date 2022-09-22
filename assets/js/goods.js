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

// Phone mask
$(document).ready(function () {
    $("#phone").mask("+7 (999)999-99-99", {
        autoclear: false
    });
});

// Sortings
const sortingBtn = document.querySelectorAll('.sortingBtn');

const goods = document.querySelector('.goods_items');

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

function ascendingSort(sortType) {
    for (let i = 0; i < goods.children.length; i++) {
        for (let j = i; j < goods.children.length; j++) {
            if (+goods.children[i].getAttribute(sortType) > +goods.children[j].getAttribute(sortType)) {
                replacedNode = goods.replaceChild(goods.children[j], goods.children[i]);
                insertAfter(replacedNode, goods.children[i]);
            }
        }
    }
}

function descdendingSort(sortType) {
    for (let i = 0; i < goods.children.length; i++) {
        for (let j = i; j < goods.children.length; j++) {
            if (+goods.children[i].getAttribute(sortType) < +goods.children[j].getAttribute(sortType)) {
                replacedNode = goods.replaceChild(goods.children[j], goods.children[i]);
                insertAfter(replacedNode, goods.children[i]);
            }
        }
    }
}


const rateSort = document.querySelector('#rateSort');

rateSort.addEventListener('click', () => {
    sortingBtn.forEach(el => el.style.color = "inherit");

    rateSort.style.color = "#111";
    descdendingSort('data-rating');
});


const priceSort = document.querySelector('#priceSort');

priceSort.addEventListener('click', () => {
    sortingBtn.forEach(el => el.style.color = "inherit");

    priceSort.style.color = "#111";
    descdendingSort('data-price');

})


const nameSort = document.querySelector('#nameSort');

nameSort.addEventListener('click', () => {
    sortingBtn.forEach(el => el.style.color = "inherit");

    nameSort.style.color = "#111";
    
    for (let i = 0; i < goods.children.length; i++) {
        for (let j = i; j < goods.children.length; j++) {
            if (goods.children[i].getAttribute('data-name') > goods.children[j].getAttribute('data-name')) {
                replacedNode = goods.replaceChild(goods.children[j], goods.children[i]);
                insertAfter(replacedNode, goods.children[i]);
            }
        }
    }
})

const isNewSort = document.querySelector('#isNewSort');

isNewSort.addEventListener('click', () => {
    sortingBtn.forEach(el => el.style.color = "inherit");

    isNewSort.style.color = "#111";
    descdendingSort('data-new');
})


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