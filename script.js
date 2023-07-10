const firstNameInput = document.querySelector("#first-name-input");
const submitBtn = document.querySelector("#submit-btn");
const LastNameInput = document.querySelector("#last-name-input");
const EmailInput = document.querySelector("#email-input");
const PasswordInput = document.querySelector("#password-input");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};
1dff;
LastNameInput.onkeyup = () => {
  LastNameInput.classList.remove("is-valid");
  LastNameInput.classList.remove("is-invalid");
};

EmailInput.onkeyup = () => {
  EmailInput.classList.remove("is-valid");
  EmailInput.classList.remove("is-invalid");
};

PasswordInput.onkeyup = () => {
  PasswordInput.classList.remove("is-valid");
  PasswordInput.classList.remove("is-invalid");
};

submitBtn.onclick = () => {
  let isFirstNameOK = false;
  let isLastNameOK = false;
  let isEmailOK = false;
  let isPasswordOK = false;

  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOK = true;
  }
  if (LastNameInput.value === "") {
    LastNameInput.classList.add("is-invalid");
  } else {
    LastNameInput.classList.add("is-valid");
    isLastNameOK = true;
  }

  if (validateEmail(EmailInput.value)) {
    EmailInput.classList.add("is-valid");
    isEmailOK = true;
  } else {
    EmailInput.classList.add("is-invalid");
  }
  if (PasswordInput.value.length >= 6) {
    PasswordInput.classList.add("is-valid");
    isPasswordOK = true;
  } else {
    PasswordInput.classList.add("is-invalid");
  }

  if (isFirstNameOK && isLastNameOK && isEmailOK && isPasswordOK) {
    alert("Registered successfully");
  }
};
