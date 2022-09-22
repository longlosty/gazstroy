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

    self.style.width = `${self.value.length + 6.4}ex`
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

// Tabs
const tabBtn = document.querySelectorAll('.tab-btn');
const tabContent = document.querySelectorAll('.tab_content');

tabBtn.forEach(btn => 
    btn.addEventListener('click', (e) => {
        const tabPath = e.target.dataset.tabsPath;
        switchTab(tabPath);
}
))

function switchTab (path) {
    tabBtn.forEach(btn => btn.classList.remove('tab-btn--active'));
    document.querySelector(`[data-tabs-path="${path}"]`).classList.add('tab-btn--active');
    
    tabContent.forEach( content => content.classList.remove('tab_content--active'));
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tab_content--active');
}

// Popular slider
new Swiper(".popularSwiper", {
    slidesPerView: 4,
    navigation: {
        nextEl: '.slider_next',
        prevEl: '.slider_prev',
    },
})

