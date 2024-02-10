// input checker

const emailInput = document.getElementById("email");
const errorIcon = document.getElementById("error-icon");
const errorText = document.getElementById("error-text");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail() {
  if (emailRegex.test(emailInput.value) || emailInput.value === "") {
    errorIcon.style.display = "none";
    errorText.style.display = "none";
  } else {
    errorIcon.style.display = "block";
    errorText.style.display = "block";
  }
}

emailInput.addEventListener("input", validateEmail);
