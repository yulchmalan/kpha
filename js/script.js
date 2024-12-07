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
                const icon = otherItem.querySelectorAll('.icon use');
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                    if (icon) {
                        icon.forEach((inactiveIcon) => {
                            const href = inactiveIcon.getAttribute("href");
                            inactiveIcon.setAttribute("href", href.replace("minus", "plus"));
                        });
                    }
                }
            });
            item.classList.toggle("active");

            const activeIcon = item.querySelectorAll('.icon use');
            if (activeIcon) {
                activeIcon.forEach((icon) => {
                    const href = icon.getAttribute("href");
                    if (item.classList.contains("active")) {
                        icon.setAttribute("href", href.replace("plus", "minus"));
                    } else {
                        icon.setAttribute("href", href.replace("minus", "plus"));
                    }
                });
            }
        });
    });
}


const toggleSub = document.getElementById("toggleSub");

if (toggleSub) {
    const prices = [
        { monthly: "$9.99", yearly: "$99.99" },
        { monthly: "$12.99", yearly: "$119.99" },
        { monthly: "$14.99", yearly: "$149.99" },
    ];

    const pricingContainer = document.getElementById("pricingContainer");
    const toggleBtns = toggleSub.querySelectorAll(".toggle-btn");
    const toggleBtnMonthly = document.getElementById("toggleMonthly");
    const toggleBtnYearly = document.getElementById("toggleYearly");

    toggleSub.addEventListener("click", (e) => {
        const clickedBtn = e.target;

        if (clickedBtn === toggleBtnMonthly || clickedBtn === toggleBtnYearly) {
            toggleBtns.forEach((btn) => btn.classList.remove("active"));
            clickedBtn.classList.add("active");

            const isMonthly = clickedBtn === toggleBtnMonthly;

            const cards = pricingContainer.querySelectorAll(".card");
            cards.forEach((card, index) => {
                const priceElement = card.querySelector(".big-num");
                const durationElement = card.querySelector(".duration");

                if (priceElement && durationElement) {
                    priceElement.textContent = isMonthly
                        ? prices[index].monthly
                        : prices[index].yearly;
                    durationElement.textContent = isMonthly ? "/month" : "/year";
                }
            });
        }
    });
}