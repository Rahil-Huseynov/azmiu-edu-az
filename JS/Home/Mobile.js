document.addEventListener("DOMContentLoaded", function () {
  const navBarMobileDropdown = document.querySelector(
    ".navbar__mobile-dropdown"
  );
  const navBarCloseBtn = document.querySelector(".navbar__mobile-close-btn");
  const navBarMobileLogo = document.querySelector(".navbar__mobile-logo");
  const navBarMobile = document.querySelector(".navbar__mobile");
  const navBarMobileBurgerBtn = document.querySelector(
    ".navbar__mobile-burger-btn-icon"
  );

  // Burger düyməsinə klik zamanı açılıb bağlanma
  navBarMobileBurgerBtn.addEventListener("click", () => {
    const isDropdownActive = navBarMobileDropdown.classList.contains(
      "navbar__mobile-dropdown-active"
    );

    navBarMobileDropdown.classList.toggle("navbar__mobile-dropdown-active");
    navBarCloseBtn.classList.toggle("navbar__mobile-close-btn-active");
    navBarMobileBurgerBtn.classList.toggle("burger-active");

    if (isDropdownActive) {
      // Bağlanır
      navBarMobile.style.display = "block"; // Yenidən görünən edir
      navBarMobile.style.width = "100%";
      navBarMobileLogo.style.display = "block";
      navBarMobileBurgerBtn.style.display = "block";
    } else {
      // Açılır
      navBarMobile.style.display = "none"; // Tamamilə gizlədir
      navBarMobile.style.width = "300px";
      navBarMobileLogo.style.display = "none";
      navBarMobileBurgerBtn.style.display = "none";
    }
  });

  // Bağlama düyməsi üçün klik eventi
  navBarCloseBtn.addEventListener("click", () => {
    const isDropdownActive = navBarMobileDropdown.classList.contains(
      "navbar__mobile-dropdown-active"
    );

    if (isDropdownActive) {
      // Bağlanır
      navBarMobileDropdown.classList.remove("navbar__mobile-dropdown-active");
      navBarCloseBtn.classList.remove("navbar__mobile-close-btn-active");
      navBarMobileBurgerBtn.classList.remove("burger-active");

      navBarMobile.style.display = "block"; // Bağlananda yenidən görünən edir
      navBarMobile.style.width = "100%";
      navBarMobileLogo.style.display = "block";
      navBarMobileBurgerBtn.style.display = "block";
    }
  });

  // BURGER
  // Получаем основные элементы
  const mainMenuBurger = document.querySelector("#navbar__burger-wrapper"); // Исправленный ID
  const navBarArrowBurgerParent = document.querySelectorAll(
    ".navbar__burger-menu-item_header_item"
  );
  const navBarArrowBurger = document.querySelectorAll(".navbar__arrow-icon");

  if (mainMenuBurger) {
    mainMenuBurger.addEventListener("click", function (event) {
      const clickedItemBurger = event.target.closest(
        ".navbar__burger-menu-item"
      );

      if (clickedItemBurger) {
        const dropdownBurger = clickedItemBurger.querySelector(
          ".navbar__burger-dropdown"
        );

        if (dropdownBurger) {
          const isActiveBurger = dropdownBurger.classList.contains(
            "navbar__burger-dropdown-active"
          );

          // Закрываем все открытые выпадающие списки
          document
            .querySelectorAll(".navbar__burger-dropdown-active")
            .forEach((openDropdown) => {
              if (openDropdown !== dropdownBurger) {
                openDropdown.classList.remove("navbar__burger-dropdown-active");
                const arrow = openDropdown
                  .closest(".navbar__burger-menu-item")
                  ?.querySelector(".navbar__arrow-icon");
                if (arrow) arrow.style.transform = "rotate(0deg)";
              }
            });

          // Переключаем текущее меню
          dropdownBurger.classList.toggle(
            "navbar__burger-dropdown-active",
            !isActiveBurger
          );

          // Переключаем стрелку
          const arrowBurger = clickedItemBurger.querySelector(
            ".navbar__arrow-icon"
          );
          if (arrowBurger) {
            arrowBurger.style.transform = isActiveBurger
              ? "rotate(0deg)"
              : "rotate(180deg)";
          }
        }
      }
    });

    // Закрытие всех меню при клике вне них
    document.addEventListener("click", function (event) {
      if (!mainMenuBurger.contains(event.target)) {
        document
          .querySelectorAll(".navbar__burger-dropdown-active")
          .forEach((dropdown) => {
            dropdown.classList.remove("navbar__burger-dropdown-active");

            const arrow = dropdown
              .closest(".navbar__burger-menu-item")
              ?.querySelector(".navbar__arrow-icon");
            if (arrow) {
              arrow.style.transform = "rotate(0deg)";
            }
          });
      }
    });

    // Обработчик кликов на заголовки меню (для корректного вращения стрелки)
    navBarArrowBurgerParent.forEach((parent, index) => {
      parent.addEventListener("click", function () {
        const currentArrow = navBarArrowBurger[index];

        if (currentArrow) {
          const isRotated = currentArrow.style.transform === "rotate(180deg)";
          currentArrow.style.transform = isRotated
            ? "rotate(0deg)"
            : "rotate(180deg)";
        }
      });
    });
  }
});
