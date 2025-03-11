document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".navbar__burger");
  const menu = document.querySelector("#navbar__wrapper");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
  });
});
