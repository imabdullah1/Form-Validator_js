const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passowrd2 = document.getElementById("passowrd2");

function showError() {}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (username.value === "") {
    showError(username, "username is required");
  } else {
    showSuccess(username);
  }
});
