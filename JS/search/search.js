// document.addEventListener("DOMContentLoaded", function () {
//     let currentPage = parseInt(localStorage.getItem("currentPage")) || 1;
//     let lastCount = parseInt(localStorage.getItem("lastCount")) || 0;
//     let resultsPerPage = 2; // Hər səhifədə neçə nəticə var?
    
//     // CSS sayğacını əvvəlki dəyərə uyğun qur
//     document.body.style.counterReset = `search-counter ${lastCount}`;

//     // Sayğacı yeni nəticələr üçün artır
//     let results = document.querySelectorAll(".result-block");
//     results.forEach(() => {
//         lastCount++; // Hər nəticəyə görə sayğacı artır
//     });

//     // Yeni dəyərləri yadda saxla
//     localStorage.setItem("lastCount", lastCount);
//     localStorage.setItem("currentPage", currentPage);

//     // Səhifə dəyişmə funksiyası
//     function changePage(newPage) {
//         localStorage.setItem("currentPage", newPage);
//         window.location.href = `?page=${newPage}`; // Yeni səhifəyə keçid
//     }

//     // Pagination düymələri
//     document.getElementById("prevButton").addEventListener("click", function () {
//         if (currentPage > 1) {
//             changePage(currentPage - 1);
//         }
//     });

//     document.getElementById("nextButton").addEventListener("click", function () {
//         changePage(currentPage + 1);
//     });
// });
