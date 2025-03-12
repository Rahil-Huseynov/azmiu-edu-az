document.addEventListener("DOMContentLoaded", function () {
  const mainMenu = document.getElementById("navbar__wrapper");
  const navBarArrowParent = document.querySelectorAll(
    ".navbar__menu-item_header_item"
  );
  const navBarArrow = document.querySelectorAll(".navbar__arrow-icon");

  mainMenu.addEventListener("click", function (event) {
    const clickedItem = event.target.closest(".navbar__menu-item");

    if (clickedItem) {
      const dropdowns = document.querySelectorAll(".navbar__dropdown-active");

      dropdowns.forEach((dropdown) => {
        if (!clickedItem.contains(dropdown)) {
          // Close the dropdown if clicking on a different item
          dropdown.classList.remove("navbar__dropdown-active");
          dropdown.classList.add("navbar__dropdown-closing"); // Trigger closing animation
          const arrow = dropdown
            .closest(".navbar__menu-item")
            .querySelector(".navbar__arrow-icon");
          if (arrow) {
            arrow.style.transform = "rotate(0deg)";
          }
        }
      });

      const dropdown = clickedItem.querySelector(".navbar__dropdown");
      if (dropdown) {
        const isActive = dropdown.classList.contains("navbar__dropdown-active");

        // Close other dropdowns and apply closing animation
        dropdown.classList.remove("navbar__dropdown-active");
        dropdown.classList.add("navbar__dropdown-closing");

        // If clicked dropdown is not active, open it
        if (!isActive) {
          dropdown.classList.remove("navbar__dropdown-closing");
          dropdown.classList.add("navbar__dropdown-active"); // Trigger open animation
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
      document
        .querySelectorAll(".navbar__dropdown-active")
        .forEach((dropdown) => {
          dropdown.classList.remove("navbar__dropdown-active");
          dropdown.classList.add("navbar__dropdown-closing");
          const arrow = dropdown
            .closest(".navbar__menu-item")
            .querySelector(".navbar__arrow-icon");
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
