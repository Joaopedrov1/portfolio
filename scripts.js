const sr = ScrollReveal({
  distance: "60px",
  duration: 1100,
  delay: 200,
  reset: true,
});

sr.reveal(".text", { delay: 100, origin: "top" });
sr.reveal(".heading", { delay: 100, origin: "top" });
sr.reveal(".ride-container .box", { delay: 100, origin: "top" });
sr.reveal(".services-container .box", { delay: 100, origin: "top" });
sr.reveal(".about-container", { delay: 100, origin: "top" });
sr.reveal(".reviews-container", { delay: 100, origin: "top" });

const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menu && navbar) {
  menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };

  window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollTopBtn");

  if (scrollBtn) {
    scrollBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Use it with scroll events
window.addEventListener(
  "scroll",
  debounce(function () {
    // ...existing scroll handling code...
  }, 15)
);
