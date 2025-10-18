// Load shared header and footer
fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("main-header").innerHTML = data;
  });
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("main-footer").innerHTML = data;
  });

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav");

  // Add mobile class to nav for styling (only on mobile, but we can add it always for simplicity)
  nav.classList.add("mobile");

  toggleButton.addEventListener("click", function () {
    // Toggle active classes
    nav.classList.toggle("active");
    toggleButton.classList.toggle("active");

    // Update accessibility
    const isExpanded = nav.classList.contains("active");
    toggleButton.setAttribute("aria-expanded", isExpanded);
  });

  // Optional: Close nav when clicking outside or on a link (for better UX)
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("active");
      toggleButton.classList.remove("active");
      toggleButton.setAttribute("aria-expanded", "false");
    }
  });

  // Close on escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("active")) {
      nav.classList.remove("active");
      toggleButton.classList.remove("active");
      toggleButton.setAttribute("aria-expanded", "false");
    }
  });
});

// ==================================================
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".slides");
  const totalSlides = slides.children.length; // Number of slides (4 in this case)
  let currentSlide = 0;
  let autoSlideInterval;

  // Function to show a specific slide
  function showSlide(index) {
    slides.style.transform = `translateX(-${index * (100 / totalSlides)}%)`;
  }

  // Function to go to the next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  // Function to go to the previous slide
  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }

  // Start auto-sliding every 3 seconds
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
  }

  // Stop auto-sliding (e.g., on hover)
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Arrow click events
  document.querySelector(".arrow.right").addEventListener("click", nextSlide);
  document.querySelector(".arrow.left").addEventListener("click", prevSlide);

  // Keyboard navigation (left/right arrows)
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  });

  // Pause auto-slide on hover for better UX
  const slider = document.querySelector(".slider");
  slider.addEventListener("mouseenter", stopAutoSlide);
  slider.addEventListener("mouseleave", startAutoSlide);

  // Initialize
  showSlide(currentSlide);
  startAutoSlide();
});
