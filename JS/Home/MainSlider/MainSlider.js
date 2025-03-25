document.addEventListener("DOMContentLoaded", function () {
  var swiper2 = new Swiper(".carousel-2 .swiper-2", {
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
      nextEl: ".carousel-2 .swiper-button-next-2",
      prevEl: ".carousel-2 .swiper-button-prev-2",
    },
    breakpoints: {
      768: {
        slidesPerView: 1.1, 
      },
    },
  });
});
