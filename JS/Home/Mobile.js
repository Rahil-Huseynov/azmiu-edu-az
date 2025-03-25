document.addEventListener("DOMContentLoaded", function () {
  const navBarMobileDropdown = document.querySelector(".navbar__mobile-dropdown");
  const navBarCloseBtn = document.querySelector(".navbar__mobile-close-btn");
  const navBarMobileLogo = document.querySelector(".navbar__mobile-logo");
  const navBarMobile = document.querySelector(".navbar__mobile");
  const navBarMobileBurgerBtn = document.querySelector(".navbar__mobile-burger-btn-icon");

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  };

  navBarMobileBurgerBtn.addEventListener("click", () => {
    const isDropdownActive = navBarMobileDropdown.classList.contains("navbar__mobile-dropdown-active");

    navBarMobileDropdown.classList.toggle("navbar__mobile-dropdown-active");
    navBarCloseBtn.classList.toggle("navbar__mobile-close-btn-active");
    navBarMobileBurgerBtn.classList.toggle("burger-active");

    if (isDropdownActive) {
      navBarMobile.style.display = "block";
      navBarMobile.style.width = "100%";
      navBarMobileLogo.style.display = "block";
      navBarMobileBurgerBtn.style.display = "block";

      disableScroll();
    } else {
      navBarMobile.style.display = "none";
      navBarMobile.style.width = "300px";
      navBarMobileLogo.style.display = "none";
      navBarMobileBurgerBtn.style.display = "none";

      disableScroll();
    }
  });

  navBarCloseBtn.addEventListener("click", () => {
    const isDropdownActive = navBarMobileDropdown.classList.contains("navbar__mobile-dropdown-active");

    if (isDropdownActive) {
      navBarMobileDropdown.classList.remove("navbar__mobile-dropdown-active");
      navBarCloseBtn.classList.remove("navbar__mobile-close-btn-active");
      navBarMobileBurgerBtn.classList.remove("burger-active");

      navBarMobile.style.display = "block";
      navBarMobile.style.width = "100%";
      navBarMobileLogo.style.display = "block";
      navBarMobileBurgerBtn.style.display = "block";

      enableScroll();
    }
  });

  const mainMenuBurger = document.querySelector("#navbar__burger-wrapper");
  const navBarArrowBurgerParent = document.querySelectorAll(".navbar__burger-menu-item_header_item");
  const navBarArrowBurger = document.querySelectorAll(".navbar__arrow-icon");

  if (mainMenuBurger) {
    mainMenuBurger.addEventListener("click", function (event) {
      const clickedItemBurger = event.target.closest(".navbar__burger-menu-item");

      if (clickedItemBurger) {
        const dropdownBurger = clickedItemBurger.querySelector(".navbar__burger-dropdown");

        if (dropdownBurger) {
          const isActiveBurger = dropdownBurger.classList.contains("navbar__burger-dropdown-active");

          document.querySelectorAll(".navbar__burger-dropdown-active").forEach((openDropdown) => {
            if (openDropdown !== dropdownBurger) {
              openDropdown.classList.remove("navbar__burger-dropdown-active");
              const arrow = openDropdown.closest(".navbar__burger-menu-item")?.querySelector(".navbar__arrow-icon");
              if (arrow) arrow.style.transform = "rotate(0deg)";
            }
          });

          dropdownBurger.classList.toggle("navbar__burger-dropdown-active", !isActiveBurger);

          const arrowBurger = clickedItemBurger.querySelector(".navbar__arrow-icon");
          if (arrowBurger) {
            arrowBurger.style.transform = isActiveBurger ? "rotate(0deg)" : "rotate(180deg)";
          }
        }
      }
    });

    document.addEventListener("click", function (event) {
      if (!mainMenuBurger.contains(event.target)) {
        document.querySelectorAll(".navbar__burger-dropdown-active").forEach((dropdown) => {
          dropdown.classList.remove("navbar__burger-dropdown-active");

          const arrow = dropdown.closest(".navbar__burger-menu-item")?.querySelector(".navbar__arrow-icon");
          if (arrow) {
            arrow.style.transform = "rotate(0deg)";
          }
        });
      }
    });

    navBarArrowBurgerParent.forEach((parent, index) => {
      parent.addEventListener("click", function () {
        const currentArrow = navBarArrowBurger[index];

        if (currentArrow) {
          const isRotated = currentArrow.style.transform === "rotate(180deg)";
          currentArrow.style.transform = isRotated ? "rotate(0deg)" : "rotate(180deg)";
        }
      });
    });
  }

  const searchWrapper = document.querySelector(".group_mobile");
  const searchIcon = document.querySelector(".navbar__mobile__search-icon-wrapper");
  const closeIcon = document.querySelector(".navbar__mobile__search-close-icon-wrapper");
  const inputField = document.querySelector(".input");

  searchIcon.addEventListener("click", () => {
    searchWrapper.classList.add("open");
    searchIcon.style.display = "none"; 
    closeIcon.style.display = "flex"; 
  });

  closeIcon.addEventListener("click", () => {
    searchWrapper.classList.remove("open");
    searchIcon.style.display = "flex"; 
    closeIcon.style.display = "none"; 
  });

  inputField.addEventListener("focus", () => {
    searchWrapper.classList.add("open");
    searchIcon.style.display = "none";
    closeIcon.style.display = "flex";
  });

  document.addEventListener("click", (event) => {
    if (!searchWrapper.contains(event.target) && !searchIcon.contains(event.target)) {
      searchWrapper.classList.remove("open");
      searchIcon.style.display = "flex";
      closeIcon.style.display = "none";
    }
  });

  const mobileItem = document.querySelector(".mobile-item_item");
  const mobileDropdownNav = document.querySelector(".mobile-dropdown-nav");

  mobileItem.addEventListener("click", () => {
    const isOpen = mobileDropdownNav.classList.contains("active");

    if (isOpen) {
      mobileDropdownNav.style.maxHeight = "0";
      mobileDropdownNav.style.opacity = "0";
      setTimeout(() => {
        mobileDropdownNav.classList.remove("active");
        mobileDropdownNav.style.display = "none";
      }, 300);
    } else {
      mobileDropdownNav.style.display = "grid";
      setTimeout(() => {
        mobileDropdownNav.classList.add("active");
        mobileDropdownNav.style.maxHeight = "200px";
        mobileDropdownNav.style.opacity = "1";
      }, 10);
    }
  });

  document.querySelectorAll(".mobile-dropdown-nav_items").forEach((item) => {
    item.addEventListener("click", function () {
      document.querySelectorAll(".mobile-dropdown-nav_items").forEach((el) => {
        el.classList.remove("active");
      });

      this.classList.add("active");

      mobileDropdownNav.style.maxHeight = "0";
      mobileDropdownNav.style.opacity = "0";
      setTimeout(() => {
        mobileDropdownNav.classList.remove("active");
        mobileDropdownNav.style.display = "none";
      }, 300);
    });
  });
});
