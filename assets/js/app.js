/* HEADER  */

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
const dropdownTrigger = document.querySelector('#dropdownTrigger');
const hasDropdown = document.querySelector('.hasDropdown');
const dropdown = document.querySelector('.dropdown');

dropdownTrigger.addEventListener("click", function () {
    dropdown.classList.toggle('opened');
    hasDropdown.classList.toggle('opened');
});

/* FOOTER */

// Arrow-up button
let t;
function up() {
    let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0, -100);
        t = setTimeout('up()', 15);
    } else clearTimeout(t);
    return false;
}

// Tabs
const tabBtn = document.querySelectorAll('.tab-btn');
const tabContent = document.querySelectorAll('.tab-content');

tabBtn.forEach(btn => 
    btn.addEventListener('click', (e) => {
        const tabPath = e.target.dataset.tabsPath;
        switchTab(tabPath);
}
))

function switchTab (path) {
    tabBtn.forEach(btn => btn.classList.remove('tab-btn--active'));
    document.querySelector(`[data-tabs-path="${path}"]`).classList.add('tab-btn--active');
    
    tabContent.forEach( content => content.classList.remove('tab-content--active'));
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tab-content--active');
}

/* HEADER */
// Add to card
const productButton = document.querySelectorAll('#addToCart');
const cartPopup = document.querySelector('.cart__popup--content');
const cartQuantity = document.querySelector('#cartQuantity');
const productQuantity = document.querySelector('#productQuantity');
const fullPrice = document.querySelector('#fullprice');

let price = 0;

function randomId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function priceWithoutSpaces(str) {
    return str.replace(/\s/g, '');
}

function normalPrice(str) {
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1');
}

const generateCartProduct = (img, title, quantity, price, id) => {
    return `

        <div class="popup_card" data-id="${id}">
            <div class="card_preview">
                <img src="${img}" alt="">
            </div>
            <div class="card_info">
                <p class="card_title">${title}</p>
                <p class="card_price">
                <span id="productQuantity">${quantity}</span>х ${price}</p>
            </div>
            <div class="card_delete">
                <button>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5235 9.75613C12.0122 10.245 12.0122 11.0363 11.5235 11.5238C11.2798 11.7675 10.9598 11.89 10.6396 11.89C10.3196 11.89 9.99965 11.7675 9.75589 11.5238L5.99971 7.76738L2.24353 11.5238C1.99977 11.7675 1.67979 11.89 1.35981 11.89C1.03961 11.89 0.719631 11.7675 0.475872 11.5238C-0.0127907 11.0363 -0.0127907 10.245 0.475872 9.75613L4.23228 5.99995L0.475872 2.24377C-0.0127907 1.75488 -0.0127907 0.963634 0.475872 0.476116C0.964764 -0.0125465 1.75463 -0.0125465 2.24353 0.476116L5.99971 4.23252L9.75589 0.476116C10.2448 -0.0125465 11.0346 -0.0125465 11.5235 0.476116C12.0122 0.963634 12.0122 1.75488 11.5235 2.24377L7.76713 5.99995L11.5235 9.75613Z" fill="#FAFAFA"/>
                    </svg>
                </button>
            </div>
        </div>

    `;
}


/* Cart */

 // Прослушиваем загрузку документа
 document.addEventListener("DOMContentLoaded", function () {
    // Обновляем страницу при перевороте экрана
    window.addEventListener("orientationchange", function () {
      window.location.reload();
    });

    // Обновить стоимость во всех карточках корзины
    function updateCartCardsSummary() {
        // Получаем все карточки на странице корзины
        const cards = document.querySelectorAll("[data-cart=card]");

        // Проверка на пустоту
        if (cards.length > 0) {
        // Проходимся по каждой карточке
        cards.forEach((card) => {
            // Получаем актуальную цену
            let price = card.querySelector("[data-cart=price]").textContent;
            // Получаем актуальное количество
            let quantity = card.querySelector("[data-cart=quantity]").value;
            // Получаем контейнер для стоимости
            const summaryElement = card.querySelector("[data-cart=summary]");

            // Удаляем все пробелы
            price = price.replace(/\s/g, "");
            quantity = quantity.replace(/\s/g, "");

            // Преобразуем число
            price = parseInt(price);
            quantity = parseInt(quantity);

            // if (!Number.isInteger(quantity) || quantity < 0) {
            //   quantity = 0;
            // }

            // Рассчитываем финальную стоимость
            let summaryValue = price * quantity;
            // Разделяем на разряды
            summaryValue = summaryValue.toLocaleString();
            // Подставляем значение в нужный элемент
            summaryElement.textContent = summaryValue;
        });
        }
    }

    // Обновляем блок с финальным расчетом стоимости
    function updateCartResult() {
        // Контейнер для финальный результат
        const resultFinal = document.querySelector("[data-cart=result-final]");

        // Получаем все карточки на странице и сразу преобразуем коллекцию в массив
        const cardsAll = [...document.querySelectorAll("[data-cart=card]")];
        // Фильтруем карточки (не должно быть display:none)
        const cardsFiltered = cardsAll.filter((card) => getComputedStyle(card).display != "none");

        // Получаем блок с заглушкой
        const thumbEmpty = document.querySelector("[data-cart=thumb-empty]");

        // Резервируем переменную для значения
        let resultValue = 0;

        // Проверка на пустоту
        if (cardsFiltered.length > 0) {
            // Собираем стоимость из всех карточек на странице
            cardsFiltered.forEach((card) => {
            const cardSummary = card.querySelector("[data-cart=summary]");
            if (cardSummary) {
                let value = cardSummary.textContent;
                value = value.replace(/\s/g, "");
                value = parseInt(value);

                resultValue = resultValue + value;
            }
            });

            // Проверка на пустоту
            if (thumbEmpty) {
            // Скрываем блок есть карточки есть
            thumbEmpty.style.display = "none";
            }
        } else {
            // Проверка на пустоту
            if (thumbEmpty) {
            // Показываем блок если карточек нет
            thumbEmpty.style.display = "block";
            }
        }

        // Проверка на пустоту
        if (resultFinal) {
            // Присваиваем значение и делим по разрядам
            resultFinal.textContent = resultValue.toLocaleString();
        }
    }

    // Корзина
    document.addEventListener("click", function (event) {
    if (
        // При клике на кнопку увеличить или уменьшить кол-во товара (в карточке)
        event.target.closest(".quantity-button") ||
        // При клике на кнопку удалить карточку из корзины
        event.target.closest("[data-cart=remove]") ||
        // Клике на кнопку удалить все товары из корзины
        event.target.closest("[data-cart=remove-all]")
        ) {
        setTimeout(function () {
            // Обновляем стоимость в карточках корзины
            updateCartCardsSummary();
            // Обновляем суммарные стоимость в корзине
            updateCartResult();
        }, 25);
        }
    })

    updateCartCardsSummary();
    updateCartResult();

    /* PRODUCT PAGE AND CART*/
    // Stepper
    const stepper = document.querySelector('.stepper');
    const stepperInput = document.querySelector('#stepperInput');
    const stepUp = document.querySelector('#stepUp');
    const stepDown = document.querySelector('#stepDown');

    let count = stepperInput.value;

    stepperInput.addEventListener('keyup', (e) => {
        let self = e.currentTarget;

        self.style.width = `${self.value.length + 6.4}ex`

        if (self.value == '0') {
            self.value = 1;
        }

        count = stepperInput.value;
        
        if (count == 1) {
            stepDown.classList.add('disabled');
        } else {
            stepDown.classList.remove('disabled');
        }
    })

    stepperInput.addEventListener('change', (e) => {
        let self = e.currentTarget;

        if (!self.value) {
            self.value = 1;
        }

        count = stepperInput.value;

        if (count == 1) {
            stepDown.classList.add('disabled');
        } else {
            stepDown.classList.remove('disabled');
        }

        self.style.width = `${self.value.length + 6.4}ex`;

        updateCartCardsSummary();
        updateCartResult();
    })

    stepUp.addEventListener('click', (e) => {
        e.preventDefault();

        count = stepperInput.value;
        count++;
        stepperInput.value = count;

        stepperInput.style.width = `${stepperInput.value.length + 6.4}ex`

        if (count == 1) {
            stepDown.classList.add('disabled');
        } else {
            stepDown.classList.remove('disabled');
        }

        updateCartCardsSummary();
        updateCartResult();
    })

    stepDown.addEventListener('click', (e) => {
        e.preventDefault();

        count = stepperInput.value;
        count--;
        stepperInput.value = count;

        stepperInput.style.width = `${stepperInput.value.length + 6.4}ex`

        if (count == 1) {
            stepDown.classList.add('disabled');
        } else {
            stepDown.classList.remove('disabled');
        }

        updateCartCardsSummary();
        updateCartResult();
    })

    function allowNumbersOnly(e) {
        var code = (e.which) ? e.which : e.keyCode;

        if (code > 31 && (code < 48 || code > 57)) {
            e.preventDefault();
        }
    }

    stepperInput.addEventListener('keypress', (e) => {
        allowNumbersOnly(e);
        
    })

});





