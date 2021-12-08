// Smooth scroll https://github.com/cferdinandi/smooth-scroll
const scroll = new SmoothScroll('a[href*="#"]');

window.addEventListener("DOMContentLoaded", () => {
  const call = document.querySelector(".call");

  function callDisplay() {
    call.style.right = "30px";
  }

  setInterval(callDisplay, 5000);
});
