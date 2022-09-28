/* HEADER  */

// Burger menu
const burger = document.querySelector('.menu__mbl');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const header = document.querySelector('.page__header') || document.querySelector('.global__header');
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


/* Cart page*/

 document.addEventListener("DOMContentLoaded", function () {

    window.addEventListener("orientationchange", function () {
      window.location.reload();
    });

    // Prices in card
    function updateCartCardsSummary() {
        const cards = document.querySelectorAll("[data-cart=card]");

        if (cards.length > 0) {
        cards.forEach((card) => {
            let price = card.querySelector("[data-cart=price]").textContent;
            let quantity = card.querySelector("[data-cart=quantity]").value;
            const summaryElement = card.querySelector("[data-cart=summary]");

            price = price.replace(/\s/g, "");
            quantity = quantity.replace(/\s/g, "");

            price = parseInt(price);
            quantity = parseInt(quantity);

            let summaryValue = price * quantity;
            summaryValue = summaryValue.toLocaleString();
            summaryElement.textContent = summaryValue;
        });
        }
    }

    // Result prices
    function updateCartResult() {
        const resultFinal = document.querySelector("[data-cart=result-final]");
        const cardsAll = [...document.querySelectorAll("[data-cart=card]")];
        const cardsFiltered = cardsAll.filter((card) => getComputedStyle(card).display != "none");
        const cartSection = document.querySelector('.cart-section');
        const thumbEmpty = document.querySelector("[data-cart=thumb-empty]");

        let resultValue = 0;

        if (cardsFiltered.length > 0) {
            cardsFiltered.forEach((card) => {
            const cardSummary = card.querySelector("[data-cart=summary]");
            if (cardSummary) {
                let value = cardSummary.textContent;
                value = value.replace(/\s/g, "");
                value = parseInt(value);

                resultValue = resultValue + value;
            }
            });

            if (thumbEmpty) {
            thumbEmpty.style.display = "none";
            }
        } else {
            if (thumbEmpty) {
            thumbEmpty.style.display = "block";
            cartSection.style.display = "none";
            }
        }

        if (resultFinal) {
            resultFinal.textContent = resultValue.toLocaleString();
        }
    }

    // Input tests
    function quantityInputValidate(input) {
        let value = input.value;
        value = value.replace(/\s/g, "");
        value = parseInt(value);
  
        if (!Number.isInteger(value) || value < 0) {
          value = 1;
        }
  
        let max = 999;
        if (input.hasAttribute("data-value-max")) {
          let custom = input.getAttribute("data-value-max");
          custom = custom.replace(/\s/g, "");
          custom = parseInt(custom);
          max = custom;
        }
  
        if (value > max) {
          value = max;
        }
  
        let min = 0;
        if (input.hasAttribute("data-value-min")) {
          let custom = input.getAttribute("data-value-min");
          custom = custom.replace(/\s/g, "");
          custom = parseInt(custom);
          min = custom;
        }
  
        if (value < min) {
          value = min;
        }
  
        input.value = value;
    }

    function allowNumbersOnly(e) {
        var code = (e.which) ? e.which : e.keyCode;

        if (code > 31 && (code < 48 || code > 57)) {
            e.preventDefault();
        }
    }

    // Stepper 
    document.addEventListener("click", function (event) {
        if (
            event.target.closest(".quantity-button") ||
            event.target.closest("[data-cart=remove]") ||
            event.target.closest("[data-cart=remove-all]")
            ) {
            setTimeout(function () {
                updateCartCardsSummary();
                updateCartResult();
            }, 25);
        }

        if (event.target.closest('.quantity-button')) {
            let current = {
                button: event.target.closest('.quantity-button'),
                input: event.target.closest('.stepper').querySelector('.stepperInput'),
            };

            quantityInputValidate(current.input);
            allowNumbersOnly(current.input);

            if (current.button.classList.contains('stepUp')) {
                current.input.value = parseInt(current.input.value) + 1;
            }

            if (current.button.classList.contains('stepDown')) {
                current.input.value = parseInt(current.input.value) - 1;

                let min = current.input.getAttribute("data-value-min") ? parseInt(current.input.getAttribute("data-value-min")) : 1;

                if (current.input.value < min + 1) {
                    current.input.value = min;
                }
            }
        }

        document.addEventListener("input", function (event) {
            if (event.target.classList.contains("stepperInput")) {
            quantityInputValidate(event.target);
            allowNumbersOnly(event.target);
            }

            updateCartCardsSummary();
            updateCartResult();
        });

        document.addEventListener("focusout", function (event) {
        if (event.target.classList.contains("stepperInput")) {

            if (!event.target.closest(".stepperInput").value.length > 0) {
            event.target.closest(".stepperInput").value = 1;
            }
        }
        });

        document.addEventListener('keypress', function (event) {
            if (event.target.classList.contains('stepperInput')) {
                allowNumbersOnly(event.target);
            }
        })

        if (event.target.closest("[data-cart=remove]")) {
            let card = event.target.closest('.product-card');
            card.style.display = "none";
        }

        if (event.target.closest("[data-cart=remove-all")) {
            let cartSection = document.querySelector('.cart-section');
            let cartEmptySection = document.querySelector('.cart-empty-section');
            setTimeout(() => {
                cartSection.style.display = "none";
                cartEmptySection.style.display = "block";
            }, 35);
        }
    })

    updateCartCardsSummary();
    updateCartResult();
});





