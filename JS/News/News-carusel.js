const mainImage = document.getElementById('main-image');
const newscarousel = document.querySelector('.news-carousel');
const carousel = document.querySelector('.carousel');
const fullscreenButton = document.querySelector('.fullscreen');
const playButton = document.querySelector('.play');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const timer = document.querySelector('.timer');
const thumbs = document.querySelectorAll('.thumb');
const thumbTrack = document.querySelector('.thumb-track');
const toggleThumbnails = document.querySelector('.toggle-thumbnails');
const thumbnailsWrapper = document.querySelector('.thumbnails-wrapper');
const scrollLeftButton = document.querySelector('.scroll-left');
const scrollRightButton = document.querySelector('.scroll-right');
let index = 0;
let autoplayInterval;
let timerInterval;
let isFullscreen = false;
let countdown = 3;
let thumbnailsVisible = true;
let scale = 1;
const scaleStep = 0.1;
const minScale = 1;
const maxScale = 3;

// Kiçik şəkilə tıklananda əsas şəkili yeniləyirik və timeri sıfırlayırıq.
thumbs.forEach((thumb, i) => {
  thumb.addEventListener('click', () => {
    if (thumb.src !== mainImage.src) {  // Əgər şəkil fərqlidirsə, yalnız dəyişirik
      mainImage.src = thumb.src;  // Əsas şəkili kiçik şəkilə uyğun dəyişdiririk.
      index = i;  // İndeksi yeniləyirik ki, hansı kiçik şəkil aktiv oldu.
      updateActiveThumbnail();  // Aktiv kiçik şəkili yeniləyirik.

      // Timeri sıfırlayırıq, əgər autoplay aktivdirsə
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
        clearInterval(timerInterval);
        startAutoplay();  // Autoplayi yenidən başlatmaq
      }
    }

    // Kiçik şəkil divində görünmürsə, onu ekrana gətiririk
    const thumbOffset = thumb.offsetLeft;
    const thumbWidth = thumb.offsetWidth;
    const thumbTrackWidth = thumbTrack.offsetWidth;

    if (thumbOffset < thumbTrack.scrollLeft) {
      thumbTrack.scrollTo({ left: thumbOffset, behavior: 'smooth' });
    } else if (thumbOffset + thumbWidth > thumbTrack.scrollLeft + thumbTrackWidth) {
      thumbTrack.scrollTo({ left: thumbOffset + thumbWidth - thumbTrackWidth, behavior: 'smooth' });
    }
  });
});

// Main image dəyişdikdə, autoplay'i yeniləyirik və timeri sıfırlayırıq
mainImage.addEventListener('load', () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    clearInterval(timerInterval);
    startAutoplay(); // Autoplayi yenidən başlatmaq
  }
});

// Timeri sıfırlamağa və autoplay funksiyasını yenidən başlatmağa imkan verir
function startAutoplay() {
  clearInterval(autoplayInterval);
  clearInterval(timerInterval);
  countdown = 3;
  timer.textContent = countdown;
  timerInterval = setInterval(() => {
    countdown--;
    timer.textContent = countdown;
    if (countdown === 1) {
      countdown = 4;
    }
  }, 1000);
  autoplayInterval = setInterval(() => {
    index = (index + 1) % thumbs.length;
    mainImage.src = thumbs[index].src;
    updateActiveThumbnail();
  }, 3000);
  playButton.innerHTML = `<i class="fa-solid fa-pause"></i>`;
}


playButton.addEventListener('click', () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    clearInterval(timerInterval);
    timer.textContent = '';
    autoplayInterval = null;
    playButton.innerHTML = `<i class="fa-solid fa-play">`;
  } else {
    startAutoplay();
  }
});

prevButton.addEventListener('click', () => {
  index = (index - 1 + thumbs.length) % thumbs.length;  
  mainImage.src = thumbs[index].src;  
  updateActiveThumbnail();  

  if (thumbTrack.scrollLeft > 0) {
    thumbTrack.scrollBy({ left: 5000, behavior: 'smooth' });
  }
});

nextButton.addEventListener('click', () => {
  index = (index + 1) % thumbs.length;  
  mainImage.src = thumbs[index].src;  
  updateActiveThumbnail();  

  if (thumbTrack.scrollLeft < thumbTrack.scrollWidth - thumbTrack.clientWidth) {
    thumbTrack.scrollBy({ left: 5000, behavior: 'smooth' });
  }
});


function updateActiveThumbnail() {
  thumbs.forEach(thumb => thumb.classList.remove('active'));  
  thumbs[index].classList.add('active');  

  const thumbOffset = thumbs[index].offsetLeft;
  const thumbWidth = thumbs[index].offsetWidth;
  const thumbTrackWidth = thumbTrack.offsetWidth;

  if (thumbOffset < thumbTrack.scrollLeft) {
    thumbTrack.scrollTo({ left: thumbOffset, behavior: 'smooth' });
  } else if (thumbOffset + thumbWidth > thumbTrack.scrollLeft + thumbTrackWidth) {
    thumbTrack.scrollTo({ left: thumbOffset + thumbWidth - thumbTrackWidth, behavior: 'smooth' });
  }
}

// fullscreenButton.addEventListener('click', () => {
//   if (!isFullscreen) {
//     newscarousel.requestFullscreen().then(() => {
//       mainImage.style.width = "900px";
//       mainImage.style.height = "700px";
//       carousel.style.height="auto";
//     });
//     fullscreenButton.innerHTML = `<i class="fa-solid fa-expand">`;
//   } else {
//     document.exitFullscreen();
//     mainImage.style.width = "";
//     mainImage.style.height = "";
//     carousel.style.height="";
//     fullscreenButton.innerHTML = `<i class="fa-solid fa-expand">`;
//   }
//   isFullscreen = !isFullscreen;
// });

scrollLeftButton.addEventListener('click', () => {
  thumbTrack.scrollBy({ left: -100, behavior: 'smooth' });
});

scrollRightButton.addEventListener('click', () => {
  thumbTrack.scrollBy({ left: 100, behavior: 'smooth' });
});
