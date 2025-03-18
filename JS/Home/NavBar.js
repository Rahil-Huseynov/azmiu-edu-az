document.addEventListener("DOMContentLoaded", function () {
  const mainMenu = document.getElementById("navbar__wrapper");
  const navBarArrowParent = document.querySelectorAll(".navbar__menu-item_header_item");
  const navBarArrow = document.querySelectorAll(".navbar__arrow-icon");

  const searchIcon_container = document.querySelector(".navbar__search-icon-wrapper");
  const navbarWrapper = document.querySelector("#navbar__wrapper");
  const closeIconWrapper = document.querySelector(".navbar__search-close-icon-wrapper");
  const groupElement = document.querySelector(".group");

  searchIcon_container.addEventListener("click", function () {
    searchIcon_container.style.display = "none";
    navbarWrapper.style.display = "none";
    closeIconWrapper.style.display = "flex";

    groupElement.classList.add("open");
  });

  closeIconWrapper.addEventListener("click", function () {
    searchIcon_container.style.display = "flex";
    navbarWrapper.style.display = "flex";
    closeIconWrapper.style.display = "none";
    groupElement.classList.remove("open");

  });

  mainMenu.addEventListener("click", function (event) {
    const clickedItem = event.target.closest(".navbar__menu-item");

    if (clickedItem) {
      const dropdowns = document.querySelectorAll(".navbar__dropdown-active");

      dropdowns.forEach((dropdown) => {
        if (!clickedItem.contains(dropdown)) {
          dropdown.classList.remove("navbar__dropdown-active");
          dropdown.classList.add("navbar__dropdown-closing");
          const arrow = dropdown.closest(".navbar__menu-item").querySelector(".navbar__arrow-icon");
          if (arrow) {
            arrow.style.transform = "rotate(0deg)";
          }
        }
      });

      const dropdown = clickedItem.querySelector(".navbar__dropdown");
      if (dropdown) {
        const isActive = dropdown.classList.contains("navbar__dropdown-active");

        dropdown.classList.remove("navbar__dropdown-active");
        dropdown.classList.add("navbar__dropdown-closing");

        if (!isActive) {
          dropdown.classList.remove("navbar__dropdown-closing");
          dropdown.classList.add("navbar__dropdown-active");
        }

        const arrow = clickedItem.querySelector(".navbar__arrow-icon");
        if (arrow) {
          if (dropdown.classList.contains("navbar__dropdown-active")) {
            arrow.style.transform = "rotate(180deg)";
          } else {
            arrow.style.transform = "rotate(0deg)";
          }
        }
      }
    }
  });

  document.addEventListener("click", function (event) {
    if (!mainMenu.contains(event.target)) {
      document.querySelectorAll(".navbar__dropdown-active").forEach((dropdown) => {
        dropdown.classList.remove("navbar__dropdown-active");
        dropdown.classList.add("navbar__dropdown-closing");
        const arrow = dropdown.closest(".navbar__menu-item").querySelector(".navbar__arrow-icon");
        if (arrow) {
          arrow.style.transform = "rotate(0deg)";
        }
      });
    }
  });

  navBarArrowParent.forEach((navBarArrowParent, index) => {
    navBarArrowParent.addEventListener("click", function () {
      navBarArrow.forEach((arrow) => {
        arrow.style.transform = "rotate(0deg)";
      });

      const currentArrow = navBarArrow[index];

      if (currentArrow.style.transform === "rotate(180deg)") {
        currentArrow.style.transform = "rotate(0deg)";
      } else {
        currentArrow.style.transform = "rotate(180deg)";
      }
    });
  });
});
