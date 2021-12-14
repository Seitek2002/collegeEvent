const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const review__swiper = new Swiper('.review__swiper', {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: '.review__swiper-button-next',
    prevEl: '.review__swiper-button-prev',
  },
});