document.addEventListener("DOMContentLoaded", function () {
  const newsSwiper = new Swiper(".news-carousel-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".news-carousel-swiper-pagination",
      clickable: true,
    },
  });
  const announcementsSwiper = new Swiper(".announcements-carousel-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".announcements-carousel-swiper-pagination",
      clickable: true,
    },
  });
  const newsCarousel = document.querySelector(
    ".news_announcements-news-carousel"
  );
  const announcementsCarousel = document.querySelector(
    ".news_announcements-announcements-carousel"
  );

  const newsBtn = document.querySelector(".news-btn");
  const announcementsBtn = document.querySelector(".announcements-btn");

  const activeColor = "#f3901b";
  const inactiveColor = "#204178";

  newsBtn.addEventListener("click", () => {
    announcementsCarousel.style.display = "none";
    newsCarousel.style.display = "block";

    newsCarousel.style.animation = "news-carousel-open 1s forwards";
    announcementsCarousel.style.animation =
      "announcements-carousel-close 1s forwards";

    newsBtn.style.color = activeColor;
    announcementsBtn.style.color = inactiveColor;
  });

  announcementsBtn.addEventListener("click", () => {
    announcementsCarousel.style.display = "block";
    newsCarousel.style.display = "none";

    newsCarousel.style.animation = "news-carousel-close 1s forwards";
    announcementsCarousel.style.animation =
      "announcements-carousel-open 1s forwards";

    announcementsBtn.style.color = activeColor;
    newsBtn.style.color = inactiveColor;
  });

  if (newsCarousel && announcementsCarousel) {
    newsBtn.style.color = activeColor;
    announcementsBtn.style.color = inactiveColor;
  }
});
