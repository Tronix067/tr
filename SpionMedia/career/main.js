// Hidebar SECTION

document.querySelector('.respo').addEventListener('click', function () {
  const hidebarList = document.querySelector('.hidebar-list');
  hidebarList.style.display = hidebarList.style.display === 'block' ? 'none' : 'block';
});

// Hidebar SECTION

// Sidebar SECTION

document.addEventListener('DOMContentLoaded', function () {
  const hideBtn = document.querySelector('.hide-btn');
  const sidebarList = document.querySelector('.sidebar-list');
  const openIcon = document.querySelector('.open-icon');
  const closeIcon = document.querySelector('.close-icon');

  if (!hideBtn || !sidebarList || !openIcon || !closeIcon) {
    console.error("Gerekli elemanlar bulunamadı!");
    return;
  }

  hideBtn.addEventListener('click', function () {
    // Menü açık mı kapalı mı kontrol et ve ikonları güncelle
    if (sidebarList.style.display === 'block') {
      sidebarList.style.display = 'none';
      openIcon.style.display = 'inline';
      closeIcon.style.display = 'none';
    } else {
      sidebarList.style.display = 'block';
      openIcon.style.display = 'none';
      closeIcon.style.display = 'inline';
    }
  });
});


// Sidebar SECTION


// Slider SECTION

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const mobileContent = document.querySelector('.slider-content-mobile');

function showSlide(index) {
  slideIndex = (index + slides.length) % slides.length;
  const offset = -slideIndex * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

  // Slider içeriğini mobil versiyona kopyala
  const currentContent = slides[slideIndex].querySelector('.slider-content').innerHTML;
  mobileContent.innerHTML = currentContent;
}

function moveSlide(direction) {
  showSlide(slideIndex + direction);
}

// İlk slaytı göster ve içeriği kopyala
showSlide(slideIndex);

// Otomatik geçiş (opsiyonel)
setInterval(() => moveSlide(1), 18000);

// Slider SECTION


// Music Button

let isPlaying = false;
const audio = document.getElementById("background-music");
const icon = document.querySelector(".music-button i");

function toggleMusic() {
  if (isPlaying) {
    audio.pause();
    icon.classList.replace("fa-pause", "fa-play");
  } else {
    audio.play();
    icon.classList.replace("fa-play", "fa-pause");
  }
  isPlaying = !isPlaying;
}

// Music Button


document.querySelectorAll('.project-container').forEach((container, index) => {
  const projectCarousel = container.querySelector('.project-carousel');
  const projectCards = container.querySelectorAll('.project-card');
  const projectSlider = container.querySelector('.project-slider');
  const projectPrevButton = container.querySelector('#project-prev');
  const projectNextButton = container.querySelector('#project-next');

  const projectVisibleCards = 3; // Görünen kart sayısı
  let projectCurrentIndex = 0;

  // Ekran boyutuna göre kart genişliğini belirleme
  function updateProjectCardWidth() {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 364) {
      return 290; // Küçük ekranlar (mobil)
    } else if (windowWidth <= 576) {
      return 310; // Orta ekranlar (tablet)
    } else if (windowWidth <= 768) {
      return 350; // Orta ekranlar (tablet)
    } else if (windowWidth <= 992) {
      return 440; // Büyük ekranlar (dizüstü)
    } else if (windowWidth <= 1200) {
      return 450; // Büyük ekranlar (dizüstü)
    } else {
      return 460; // Varsayılan genişlik (masaüstü)
    }
  }

  let projectCardWidth = updateProjectCardWidth();
  let maxIndex = projectCards.length - projectVisibleCards + 1;

  updateProjectCarousel();
  updateSliderBackground();

  window.addEventListener('resize', () => {
    projectCardWidth = updateProjectCardWidth();
    maxIndex = projectCards.length - projectVisibleCards + 1;
    updateProjectCarousel();
  });

  projectSlider.addEventListener('input', (e) => {
    const maxScroll = maxIndex * projectCardWidth;
    const offset = -(e.target.value / 100) * maxScroll;
    projectCarousel.style.transform = `translateX(${offset}px)`;

    projectCurrentIndex = Math.round((e.target.value / 100) * maxIndex);
    updateProjectNavButtons();
    updateSliderBackground();
  });

  projectPrevButton.addEventListener('click', () => {
    if (projectCurrentIndex > 0) {
      projectCurrentIndex--;
    } else {
      projectCurrentIndex = maxIndex;
    }
    updateProjectCarousel();
  });

  projectNextButton.addEventListener('click', () => {
    if (projectCurrentIndex < maxIndex) {
      projectCurrentIndex++;
    } else {
      projectCurrentIndex = 0;
    }
    updateProjectCarousel();
  });

  function updateProjectCarousel() {
    const offset = -projectCurrentIndex * projectCardWidth;
    projectCarousel.style.transform = `translateX(${offset}px)`;

    const sliderValue = (projectCurrentIndex / maxIndex) * 100;
    projectSlider.value = sliderValue;
    updateSliderBackground();
    updateProjectNavButtons();
  }

  function updateSliderBackground() {
    const sliderValue = projectSlider.value;
    projectSlider.style.background = `linear-gradient(to right, #8a2be2 ${sliderValue}%, #ddd ${sliderValue}%)`;
  }

  function updateProjectNavButtons() {
    projectPrevButton.disabled = projectCurrentIndex === 0 && maxIndex > 0;
    projectNextButton.disabled = projectCurrentIndex >= maxIndex;
  }
});

// Music Button



// SCROLL SECTION
ScrollReveal().reveal('.navbar', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  delay: 100,
  reset: true,
});

ScrollReveal().reveal('.slider-wrapper', {
  origin: 'bottom',
  distance: '50px',
  duration: 1800,
  delay: 300,
  reset: true,
});

ScrollReveal().reveal('.product-card', {
  origin: 'bottom',
  distance: '120px',
  duration: 1000,
  delay: 600,
  reset: true,
});

ScrollReveal().reveal('.project-container', {
  origin: 'left',
  distance: '80px',
  duration: 1200,
  delay: 300,
  reset: true,
});


ScrollReveal().reveal('.footer-container', {
  origin: 'left',
  distance: '80px',
  duration: 1200,
  delay: 300,
  reset: true,
});

ScrollReveal().reveal('.last-fot', {
  origin: 'bottom',
  distance: '80px',
  duration: 1200,
  delay: 300,
  reset: true,
});

ScrollReveal().reveal('h1', {
  origin: 'bottom',
  distance: '80px',
  duration: 2200,
  delay: 300,
  reset: true,
});
// SCROLL SECTION
