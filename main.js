document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.querySelector(".menu");

  toggle.addEventListener("click", () => {
    // Toggle the 'active' class on the menu to show/hide it
    menu.classList.toggle("active");
    // Toggle the 'active' class on the toggle for animation
    toggle.classList.toggle("active");
  });
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const slides = document.querySelectorAll(".slide");
const points = document.querySelectorAll(".nav-dot");
let index = 0;

function changeSlide(n) {
  slides.forEach((s) => s.classList.remove("active"));
  points.forEach((d) => d.classList.remove("active"));

  slides[n].classList.add("active");
  points[n].classList.add("active");
}

function nextSlide() {
  index = (index + 1) % slides.length;
  changeSlide(index);
}

points.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    changeSlide(i);
  });
});

setInterval(nextSlide, 5000); // Auto-slide every 5s

setInterval(autoSlide, 5000);
// ==================================================
