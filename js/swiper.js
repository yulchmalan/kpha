const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      dynamicMainBullets: 1,
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