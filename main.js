const error = document.querySelectorAll(".error");
const inputItem = document.querySelectorAll(".form-wrapper__input-items");
const form = document.querySelector(".form");

const FirstName = document.getElementById("FirstName");
const LastName = document.getElementById("LastName");
const Email = document.getElementById("email");
const Password = document.getElementById("password");
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  error.forEach((e) => e.classList.remove("displayError"));
  inputItem.forEach((e) => e.classList.remove("displayError"));

  if (FirstName.value.trim() == "") {
    inputItem[0].classList.add("displayError");
    error[0].classList.add("displayError");
  }
  if (LastName.value.trim() == "") {
    inputItem[1].classList.add("displayError");
    error[1].classList.add("displayError");
  }
  if (!Email.value.match(pattern)) {
    inputItem[2].classList.add("displayError");
    error[2].classList.add("displayError");
  }
  if (Password.value.trim() == "") {
    inputItem[3].classList.add("displayError");
    error[3].classList.add("displayError");
  }
});
