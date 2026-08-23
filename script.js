(function () {
  const card = document.getElementById("card");
  const form = document.getElementById("signupForm");
  const emailInput = document.getElementById("email");
  const formPanel = document.getElementById("formPanel");
  const successPanel = document.getElementById("successPanel");
  const successEmail = document.getElementById("successEmail");
  const dismissBtn = document.getElementById("dismissBtn");

  // Simple, standard email pattern: something@something.something
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function showError() {
    card.classList.add("is-invalid");
    emailInput.setAttribute("aria-invalid", "true");
  }

  function clearError() {
    card.classList.remove("is-invalid");
    emailInput.removeAttribute("aria-invalid");
  }

  function isValidEmail(value) {
    return EMAIL_REGEX.test(value.trim());
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const value = emailInput.value.trim();

    if (value === "" || !isValidEmail(value)) {
      showError();
      emailInput.focus();
      return;
    }

    clearError();
    successEmail.textContent = value;
    formPanel.hidden = true;
    successPanel.hidden = false;
  });

  // Clear the error as soon as the user starts fixing the input
  emailInput.addEventListener("input", function () {
    if (card.classList.contains("is-invalid")) {
      clearError();
    }
  });

  dismissBtn.addEventListener("click", function () {
    successPanel.hidden = true;
    formPanel.hidden = false;
    emailInput.value = "";
    clearError();
    emailInput.focus();
  });
})();