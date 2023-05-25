function validateForm() {

  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  if (username === "") {
    displayErrorMessage("username", "Username is required.");
    return false;
  }

  if (email === "") {
    displayErrorMessage("email", "Email is required.");
    return false;
  }

  if (!isValidEmail(email)) {
    displayErrorMessage("email", "Invalid email address.");
    return false;
  }

  if (password === "") {
    displayErrorMessage("password", "Password is required");
  }
}