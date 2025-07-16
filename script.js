const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");

window.addEventListener("DOMContentLoaded", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
