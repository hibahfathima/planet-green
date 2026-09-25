const track = document.getElementById('offerings-track');
const prevBtn = document.getElementById('offerings-prev');
const nextBtn = document.getElementById('offerings-next');

if (track && prevBtn && nextBtn) {
  const scrollAmount = () => track.querySelector('div').offsetWidth + 24;

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
  });
}

// =====================================
// ABOUT PAGE ACCORDION
// =====================================

 document.querySelectorAll('.m-accordion-item').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var wrapper = btn.parentElement;
      var content = wrapper.querySelector('.m-accordion-content');
      var icon = btn.querySelector('.m-accordion-icon');
      var isOpen = !content.classList.contains('hidden');

      // close all other open items
      document.querySelectorAll('.m-accordion-content').forEach(function (c) {
        c.classList.add('hidden');
      });
      document.querySelectorAll('.m-accordion-icon').forEach(function (i) {
        i.textContent = '+';
      });

      if (!isOpen) {
        content.classList.remove('hidden');
        icon.textContent = '−';
      }
    });
  });

// =====================================
// MOBILE MENU
// =====================================

const menuBtn = document.getElementById('mobile-menu-btn');
const closeBtn = document.getElementById('mobile-menu-close-btn');
const mobileMenu = document.getElementById('mobile-menu');

function openMobileMenu() {
  mobileMenu.classList.remove('hidden');
  mobileMenu.classList.add('flex');
  document.body.classList.add('overflow-hidden');
}

function closeMobileMenu() {
  mobileMenu.classList.add('hidden');
  mobileMenu.classList.remove('flex');
  document.body.classList.remove('overflow-hidden');
}

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', openMobileMenu);
}
if (closeBtn && mobileMenu) {
  closeBtn.addEventListener('click', closeMobileMenu);
}