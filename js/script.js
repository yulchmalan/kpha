const nav = document.querySelector('.nav');
const searchBtn = document.getElementById('search');
const useElement = searchBtn.querySelector('use');
const header = document.querySelector('header');

searchBtn.addEventListener("click", () => {
    nav.classList.toggle('openSearch');

    if (useElement.getAttribute("href") === "images/icons.svg#search-34") {
        return useElement.setAttribute("href", "images/icons.svg#close-34");
    } else if(useElement.getAttribute("href") === "images/icons.svg#search-24"){
        return useElement.setAttribute("href", "images/icons.svg#close-24");
    } else if(useElement.getAttribute("href") === "images/icons.svg#close-34"){
        return useElement.setAttribute("href", "images/icons.svg#search-34");
    } else {
        return useElement.setAttribute("href", "images/icons.svg#search-24");
    }
});


const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const icon = document.querySelector('.burger-icon');

burger.addEventListener('click', () => {
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