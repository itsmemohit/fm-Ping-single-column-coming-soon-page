const form = document.getElementById("form");
const email = document.getElementById("email");
const button = document.getElementById("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});

function validate() {
  const emailValue = email.ariaValueMax.trim();

  if ((emailValue = "")) {
    setErrorFor(email, "Email cannot be empty");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Please provide a valid email address");
  } else {
    setSuccessFor(email);
  }
}

function setErrorFor() {}

function setSuccessFor() {}

function isEmail(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );
}
