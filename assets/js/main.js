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

const accordionItems = document.querySelectorAll(".accordion-item");

if (accordionItems.length > 0) {

  const accordionContents =
    document.querySelectorAll(".accordion-content");

  accordionItems.forEach((item) => {

    item.addEventListener("click", () => {

      const targetId = item.dataset.content;

      // Hide all contents
      accordionContents.forEach((content) => {
        content.classList.add("hidden");
      });

      // Reset all icons
      accordionItems.forEach((accordionItem) => {

        const icon =
          accordionItem.querySelector(".accordion-icon");

        if (icon) {
          icon.textContent = "+";
        }

      });

      // Show selected content
      const targetContent =
        document.getElementById(targetId);

      if (targetContent) {
        targetContent.classList.remove("hidden");
      }

      // Change selected icon
      const selectedIcon =
        item.querySelector(".accordion-icon");

      if (selectedIcon) {
        selectedIcon.textContent = "−";
      }

    });

  });

}

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