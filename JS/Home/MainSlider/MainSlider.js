document.addEventListener("DOMContentLoaded", function () {
  var swiper2 = new Swiper(".carousel-main-slider .swiper-main-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".carousel-main-slider .swiper-button-next-main-slider",
      prevEl: ".carousel-main-slider .swiper-button-prev-main-slider",
    },
    breakpoints: {
      768: {
        slidesPerView: 1.1, 
      },
    },
  });
});
