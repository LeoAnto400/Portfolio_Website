// 1. Show the current year in the footer
var yearSpan = document.querySelector("#year");
yearSpan.textContent = new Date().getFullYear();

// 2. Show the "Back to Top" button after scrolling down
var backToTopButton = document.querySelector("#back-to-top");

function toggleBackToTop() {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

window.addEventListener("scroll", toggleBackToTop);

// 3. Scroll back to the top when the button is clicked
function scrollToTop() {
  // Skip the smooth animation if the visitor prefers reduced motion
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({
    top: 0,
    behavior: reduceMotion ? "auto" : "smooth"
  });
}

backToTopButton.addEventListener("click", scrollToTop);