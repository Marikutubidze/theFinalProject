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
