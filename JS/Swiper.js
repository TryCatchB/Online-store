const swiper = new Swiper(".main-block__swiper", {
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 50,
  parallax: true,
  speed: 800,
  pagination: {
    el: ".controll-main-block__dotts",
    clickable: true,
  },
});
