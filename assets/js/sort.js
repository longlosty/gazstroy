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
    // descdendingSort('data-new');

    for (let i = 0; i < goods.children.length; i++) {
        for (let j = i; j < goods.children.length; j++) {
            if (goods.children[i].getAttribute('data-new') < goods.children[j].getAttribute('data-new')) {
                replacedNode = goods.replaceChild(goods.children[j], goods.children[i]);
                insertAfter(replacedNode, goods.children[i]);
            }
        }
    }
})