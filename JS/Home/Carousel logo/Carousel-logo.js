document.addEventListener("DOMContentLoaded", function () {
    var swiper1 = new Swiper(".carousel-logo .swiper-logo", {
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 1000, 
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 3, 
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        },
        speed: 600,
        effect: 'slide',
        fadeEffect: {
            crossFade: true
        },
    });
});