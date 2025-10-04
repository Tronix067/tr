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
  
  
  
  // SCROLL SECTION
  ScrollReveal().reveal('.navbar', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    delay: 100,
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

  ScrollReveal().reveal('.text-title', {
    origin: 'top',
    distance: '80px',
    duration: 1200,
    delay: 300,
    reset: true,
  });

  ScrollReveal().reveal('.text-title-left', {
    origin: 'top',
    distance: '80px',
    duration: 1200,
    delay: 300,
    reset: true,
  });

  ScrollReveal().reveal('.text-section', {
    origin: 'bottom',
    distance: '80px',
    duration: 1200,
    delay: 300,
    reset: true,
  });

  ScrollReveal().reveal('.text-section-left', {
    origin: 'left',
    distance: '80px',
    duration: 1200,
    delay: 1300,
    reset: true,
  });
  // SCROLL SECTION
  