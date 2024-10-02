const form = document.querySelector("form");

// INPUT FORM
const userName = document.querySelector("#userName");
const emailPhone = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const infoPasswordText = document.querySelector(".info-password-text");

// VALIDE CONTAINER
const confirmForm = document.querySelector(".confirm-form");

// ERROR MESSAGE
const errorUserName = document.querySelector(".error-name-msg");
const errorEmailMsg = document.querySelector(".error-email-msg");
const errorPassword = document.querySelector(".error-password-msg");
const errorConfirmPassword = document.querySelector(
  ".error-confirm-password-msg"
);

// FONCTIONS

function inputStyleVerif(errorText, inputName) {
  errorText.style.display = "flex";
  inputName.style.border = "2px solid #CC0C39";
}

form.addEventListener("submit", handleForm);

function handleForm(e) {
  e.preventDefault();

  const userNameValue = userName.value;
  const emailPhoneValue = emailPhone.value;
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;

  if (userNameValue === "") {
    inputStyleVerif(errorUserName, userName);
  }

  if (emailPhoneValue === "") {
    inputStyleVerif(errorEmailMsg, emailPhone);
  }

  if (passwordValue === "" || passwordValue.length < 6) {
    inputStyleVerif(errorPassword, password);

    infoPasswordText.style.display = "none";
  }

  if (confirmPasswordValue !== passwordValue) {
    inputStyleVerif(errorConfirmPassword, confirmPassword);
  }

  if (
    userNameValue !== "" &&
    emailPhoneValue !== "" &&
    passwordValue !== "" &&
    confirmPasswordValue !== "" &&
    passwordValue.length > 6 &&
    confirmPasswordValue === passwordValue
  ) {
    form.style.display = "none";
    confirmForm.style.display = "block";

    setTimeout(() => {
      location.reload();
    }, 6000);
  }
}
