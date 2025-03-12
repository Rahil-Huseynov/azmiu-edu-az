document.addEventListener("DOMContentLoaded", function () {
    handleSubmenus();
    handleBreadcrumbs();
});

function handleSubmenus() {
    const submenus = document.querySelectorAll(".submenu");

    submenus.forEach((submenu) => {
        submenu.addEventListener("click", function (e) {
            e.stopPropagation(); 

            submenus.forEach((item) => {
                if (item !== submenu) {
                    closeSubmenu(item);
                }
            });

            if (submenu.classList.contains("active")) {
                closeSubmenu(submenu);
            } else {
                openSubmenu(submenu);
            }
        });
    });

    document.addEventListener("click", function () {
        submenus.forEach(closeSubmenu);
    });
}

function openSubmenu(submenu) {
    const submenuContainer = submenu.querySelector(".submenu-container");
    submenu.classList.add("active");
    submenuContainer.style.maxHeight = submenuContainer.scrollHeight + "px";
}

function closeSubmenu(submenu) {
    const submenuContainer = submenu.querySelector(".submenu-container");
    submenu.classList.remove("active");
    submenuContainer.style.maxHeight = "0";
}

function handleBreadcrumbs() {
    const breadcrumbItems = document.querySelectorAll(".breadcrumb__item");

    if (breadcrumbItems.length > 0) {
        breadcrumbItems[breadcrumbItems.length - 1].classList.add("active-blue");

        breadcrumbItems.forEach((item) => {
            item.addEventListener("click", function () {
                breadcrumbItems.forEach((el) => el.classList.remove("active-blue"));

                this.classList.add("active-blue");
            });
        });
    }
}
