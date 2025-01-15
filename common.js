// HEADER & BURGER
let header = document.body.querySelector("header");
let headerList = document.body.querySelector(".header-list");
let headerMenu = document.body.querySelector(".header-menu");
let burger = document.body.querySelector(".burger");
const media1400 = window.matchMedia("(width <= 1400px)");

function handleScroll() {
    if (document.documentElement.scrollTop == 0)
        {header.classList.remove("opaque");}
    else
        {header.classList.add("opaque");}
}

function handleBurgerClick() {
    const state = burger.classList.toggle("active");

    if (state)
    {
        headerMenu.classList.remove("hidden");
    }
    else
    {
        headerMenu.classList.add("hidden");
    }
}

function handleMediaChange(event) {
    if (event.matches)
    {
        headerMenu.appendChild(headerList);
        burger.classList.remove("hidden");
    }
    else
    {
        header.appendChild(headerList);
        headerMenu.classList.add("hidden");
        burger.classList.add("hidden");
        burger.classList.remove("active");
    }
}

// FOOTER
function setYear() {
    document.getElementById('year').textContent = new Date().getFullYear();
}

// EVENTS
window.addEventListener('load', setYear);
window.addEventListener('scroll', handleScroll);
burger.addEventListener('click', handleBurgerClick);
media1400.addEventListener("change", handleMediaChange);

// INIT
handleMediaChange(media1400);