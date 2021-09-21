

const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar");
const btnLinks = document.querySelector(".right");
const header = document.querySelector(".header");

// For toggling classes to display navbar
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  header.classList.toggle("marg");
});
