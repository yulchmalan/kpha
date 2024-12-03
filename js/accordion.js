const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
    item.addEventListener("click", () => {
        // Закрити всі інші пункти
        accordionItems.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.classList.remove("active");

                // Змінити іконку на "plus" у неактивних елементах
                const inactiveIcon = otherItem.querySelector('.icon use');
                if (inactiveIcon) {
                    const inactiveHref = inactiveIcon.getAttribute("href");
                    inactiveIcon.setAttribute("href", inactiveHref.replace("minus", "plus"));
                }
            }
        });

        // Тогл активного елемента
        item.classList.toggle("active");

        // Змінити іконку для активного елемента
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
