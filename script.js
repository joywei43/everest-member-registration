const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!form.checkValidity()) {
    message.textContent = "Please complete all required fields.";
    message.style.color = "red";
    return;
  }

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  console.log("Registration Data:", data);

  message.textContent = "Registration submitted successfully.";
  message.style.color = "green";

  form.reset();
});
