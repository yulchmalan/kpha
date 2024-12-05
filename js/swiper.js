const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      dragSize: 20,
    },

    slidesPerView: 1.9,
    spaceBetween: 30,
    breakpoints: {
        612: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
      },
  });