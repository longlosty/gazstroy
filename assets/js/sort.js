/* GOODS PAGES */

// Product sortings
const sortingBtn = document.querySelectorAll('.sortingBtn');

const goods = document.querySelector('.goods-list');

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


const popularSort = document.querySelector('#popularSort');

popularSort.addEventListener('click', () => {
    sortingBtn.forEach(el => el.style.color = "inherit");

    descdendingSort('data-rating');
});


const priceSort = document.querySelector('#priceSort');

priceSort.addEventListener('click', () => {
    sortingBtn.forEach(el => el.style.color = "inherit");

    descdendingSort('data-price');
})


const nameSort = document.querySelector('#nameSort');

nameSort.addEventListener('click', () => {
    sortingBtn.forEach(el => el.style.color = "inherit");

 
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

    for (let i = 0; i < goods.children.length; i++) {
        for (let j = i; j < goods.children.length; j++) {
            if (goods.children[i].getAttribute('data-new') < goods.children[j].getAttribute('data-new')) {
                replacedNode = goods.replaceChild(goods.children[j], goods.children[i]);
                insertAfter(replacedNode, goods.children[i]);
            }
        }
    }
})