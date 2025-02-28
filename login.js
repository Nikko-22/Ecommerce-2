// Get modal elements
var newUserModal = document.getElementById("loginModal");
var existingUserModal = document.getElementById("loginModal2");

// Get open modal button
var btn = document.getElementById("openModal");
// Get close buttons
var closeButtons = document.getElementsByClassName("close");

// Get switch to login element
var switchToLogin = document.getElementById("switchToLogin");

// Listen for open click
btn.onclick = function () {
  newUserModal.style.display = "block";
};

// Listen for close click
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].onclick = function () {
    newUserModal.style.display = "none";
    existingUserModal.style.display = "none";
  };
}

// Listen for outside click
window.onclick = function (event) {
  if (event.target == newUserModal) {
    newUserModal.style.display = "none";
  } else if (event.target == existingUserModal) {
    existingUserModal.style.display = "none";
  }
};

// Switch to login form
switchToLogin.onclick = function () {
  newUserModal.style.display = "none";
  existingUserModal.style.display = "block";
};

// Form validation
document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    var password = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var error = document.getElementById("error");

    if (password !== confirmPassword) {
      event.preventDefault();
      error.textContent = "Passwords do not match!";
    } else {
      error.textContent = "";
    }
  });

// Form submission handling for existing users
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    // Implement your logic here for existing user login
  });

// Password visibility toggle
document
  .getElementById("togglePassword")
  .addEventListener("change", function () {
    var password = document.getElementById("newPassword");
    var confirmPassword = document.getElementById("confirmPassword");

    if (this.checked) {
      password.type = "text";
      confirmPassword.type = "text";
    } else {
      password.type = "password";
      confirmPassword.type = "password";
    }
  });
