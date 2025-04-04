document.addEventListener("DOMContentLoaded", function () {
    handleBreadcrumbs();
});

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
