const hotelSwiper = new Swiper(".hotel-swiper", {
  loop: true,

  navigation: {
    nextEl: ".hotel-swiper__button--next",
    prevEl: ".hotel-swiper__button--prev",
  },
});

const reviewsSwiper = new Swiper(".reviews-swiper", {
  loop: true,

  navigation: {
    nextEl: ".reviews-swiper__button--next",
    prevEl: ".reviews-swiper__button--prev",
  },
});
