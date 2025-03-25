document.addEventListener("DOMContentLoaded", function () {
    function animateNumbers() {
      const numbers = document.querySelectorAll(".number");
  
      numbers.forEach((num) => {
        let limit = parseInt(num.getAttribute("data-limit"));
        let current = 0;
        let increment = Math.ceil(limit / 100); 
  
        let interval = setInterval(() => {
          current += increment;
          if (current >= limit) {
            num.textContent = limit;
            clearInterval(interval);
          } else {
            num.textContent = current;
          }
        }, 20);
      });
    }
  
    animateNumbers();
  });