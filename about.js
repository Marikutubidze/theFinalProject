// burger element

const icon = document.getElementById("icon");
const icon1 = document.getElementById("a");
const icon2 = document.getElementById("b");
const icon3 = document.getElementById("c");
const nav = document.getElementById("nav");
const blue = document.getElementById("blue");

icon.addEventListener("click", function () {
  icon1.classList.toggle("a");
  icon1.classList.toggle("active-burger");
  icon2.classList.toggle("c");
  icon3.classList.toggle("b");
  icon3.classList.toggle("active-burger");
  nav.classList.toggle("show");
  blue.classList.toggle("slide");
});
