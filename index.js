const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 25,
  slidesPerGroup: 1,
  loop: true,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    460: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },

    770: {
      slidesPerView: 2,
      spaceBetween: 25,
    },

    990: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperTwo = new Swiper(".reviews__swiper", {
  direction: "vertical",
  slidesPerView: 6,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
});
