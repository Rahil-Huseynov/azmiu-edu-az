const languageList = document.querySelector(".header__language");

languageList.addEventListener("click", (event) => {
  const item = event.target.closest(".header__language-item");
  if (item) {
    languageList.querySelectorAll(".header__language-item").forEach((li) => {
      li.classList.remove("active");
    });
    item.classList.add("active");
  }
});
