const nav = document.querySelector('.nav');
const searchBtn = document.getElementById('search');
const useElement = searchBtn.querySelector('use');
const header = document.querySelector('header');
const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const icon = document.querySelector('.burger-icon');

searchBtn.addEventListener("click", () => {
    navList.classList.remove('nav-active');
    if (!navList.classList.contains('nav-active')) {
        icon.setAttribute('href', 'images/icons.svg#burger');
    }

    nav.classList.toggle('openSearch');

    const isSmallScreen = window.innerWidth <= 1440; 
    const activeIcon = isSmallScreen 
        ? searchBtn.querySelector('.icon-sm use') 
        : searchBtn.querySelector('.icon-md use');

    const currentHref = activeIcon.getAttribute("href");

    if (currentHref.includes("search")) {
        activeIcon.setAttribute("href", currentHref.replace("search", "close"));
    } else if (currentHref.includes("close")) {
        activeIcon.setAttribute("href", currentHref.replace("close", "search"));
    }
});



burger.addEventListener('click', () => {
    nav.classList.remove('openSearch');
    navList.classList.toggle('nav-active');

    if (navList.classList.contains('nav-active')) {
        icon.setAttribute('href', 'images/icons.svg#close-24');
    } else {
        icon.setAttribute('href', 'images/icons.svg#burger');
    }
});



window.addEventListener('scroll', () => {
    if (header) { 
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});