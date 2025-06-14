// Mobile Menu

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Scroll Reveal

const sr = ScrollReveal ({
    distance: '60px',
    duration: 1100,
    delay: 200,
    reset: true
})

sr.reveal('.text', { delay: 100, origin: 'top'})
sr.reveal('.form-container form', { delay: 100, origin: 'left'})
sr.reveal('.heading', { delay: 100, origin: 'top'})
sr.reveal('.ride-container .box', { delay: 100, origin: 'top'})
sr.reveal('.services-container .box', { delay: 100, origin: 'top'})
sr.reveal('.about-container', { delay: 100, origin: 'top'})
sr.reveal('.reviews-container', { delay: 100, origin: 'top'})
sr.reveal('.newsletter .box', { delay: 100, origin: 'bottom'})

document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.querySelector(".button");

  if (scrollBtn) {
    scrollBtn.addEventListener("click", (e) => {
      e.preventDefault(); // Evita qualquer comportamento padrão
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});

