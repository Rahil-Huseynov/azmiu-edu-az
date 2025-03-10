const itemsPerPage = 7;
let currentPage = 1;

document.addEventListener("DOMContentLoaded", () => {
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const pageNumbers = document.getElementById("pageNumbers");

    function updateContent() {
        const allItems = document.querySelectorAll(".pagination-block .pag-div");
        const totalPages = Math.ceil(allItems.length / itemsPerPage);
        
        let startNumber = (currentPage - 1) * itemsPerPage + 1;

        allItems.forEach((item, index) => {
            if (index >= (currentPage - 1) * itemsPerPage && index < currentPage * itemsPerPage) {
                item.style.display = "flex";
                item.setAttribute("data-number", startNumber++); 
            } else {
                item.style.display = "none";
            }
        });

        updatePagination(totalPages);
    }

    function updatePagination(totalPages) {
        pageNumbers.innerHTML = "";
        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement("button");
            button.className = `page-number ${i === currentPage ? "active" : ""}`;
            button.textContent = i;
            button.onclick = () => {
                currentPage = i;
                updateContent();
            };
            pageNumbers.appendChild(button);
        }

        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;
    }

    prevButton.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            updateContent();
        }
    };

    nextButton.onclick = () => {
        if (currentPage < Math.ceil(document.querySelectorAll(".pagination-block .pag-div").length / itemsPerPage)) {
            currentPage++;
            updateContent();
        }
    };

    updateContent();
});
