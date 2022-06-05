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

const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
const emailErrorMsg = document.getElementById("emailErrorMsg");
const submitBtn = document.getElementById("submitBtn");
const emailInput = document.getElementById("emailInput");
const form = document.getElementById("contact-form");

function validateEmail() {
  const validEmail = emailRegex.test(emailInput.value);
  if (!validEmail) {
    submitBtn.disabled = true;
    emailErrorMsg.classList.add("d-block");
    emailErrorMsg.classList.remove("d-none");
  } else {
    submitBtn.disabled = false;
    emailErrorMsg.classList.add("d-none");
    emailErrorMsg.classList.remove("d-block");
  }
  return validEmail;
}

emailInput.addEventListener("change", validateEmail);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const validEmail = validateEmail();
  if (!validEmail) return;
  alert("your message has been received");
  form.reset();
});
