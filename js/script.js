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

    if (nav.classList.contains('openSearch')) {
        activeIcon.setAttribute("href", currentHref.replace("search", "close"));
    } else {
        activeIcon.setAttribute("href", currentHref.replace("close", "search"));
    }
});



burger.addEventListener('click', () => {
    const isSmallScreen = window.innerWidth <= 1440; 
    const activeIcon = isSmallScreen 
        ? searchBtn.querySelector('.icon-sm use') 
        : searchBtn.querySelector('.icon-md use');
    const currentHref = activeIcon.getAttribute("href");
    nav.classList.remove('openSearch');
    navList.classList.toggle('nav-active');
    activeIcon.setAttribute("href", currentHref.replace("close", "search"));
    

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

const accordionItems = document.querySelectorAll(".accordion-item");

if (accordionItems) {
    accordionItems.forEach((item) => {
        item.addEventListener("click", () => {
            accordionItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
    
                    const inactiveIcon = otherItem.querySelector('.icon use');
                    if (inactiveIcon) {
                        const inactiveHref = inactiveIcon.getAttribute("href");
                        inactiveIcon.setAttribute("href", inactiveHref.replace("minus", "plus"));
                    }
                }
            });
            item.classList.toggle("active");
    
            const activeIcon = item.querySelector('.icon use');
            if (activeIcon) {
                const currentHref = activeIcon.getAttribute("href");
                if (item.classList.contains("active")) {
                    activeIcon.setAttribute("href", currentHref.replace("plus", "minus"));
                } else {
                    activeIcon.setAttribute("href", currentHref.replace("minus", "plus"));
                }
            }
        });
    });
}

const toggleSub = document.getElementById("toggleSub");

if (toggleSub) {
    const monthContainer = document.getElementById("monthy");
    const yearContainer = document.getElementById("yearly");
    const toggleBtns = toggleSub.querySelectorAll(".toggle-btn");
    const toggleBtnMonthly = toggleSub.querySelector("#toggleMonthly");
    const toggleBtnYearly = toggleSub.querySelector("#toggleYearly");

    toggleSub.addEventListener("click", (e) => {
        const clickedBtn = e.target;

        if (clickedBtn === toggleBtnMonthly || clickedBtn === toggleBtnYearly) {
            toggleBtns.forEach((btn) => btn.classList.remove("active"));
            clickedBtn.classList.add("active");

            if (clickedBtn === toggleBtnMonthly) {
                monthContainer.style.display = "flex";
                yearContainer.style.display = "none";
            } else if (clickedBtn === toggleBtnYearly) {
                monthContainer.style.display = "none";
                yearContainer.style.display = "flex";
            }
        }
    });
}

