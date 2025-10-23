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

const slideTrack = document.querySelector(".slide-track");
const dots = document.querySelectorAll(".dot");
const totalSlides = dots.length;

let currentIndex = 0;

function showSlide(index) {
  slideTrack.style.transform = `translateX(-${index * 100}%)`;

  // Update active dot
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// Auto Slide every 4 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}, 4000);

// Manual click control
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});
