const form = document.getElementById("form");
const firstName = document.getElementById("f-name");
const lastName = document.getElementById("l-name");
const dateOfBirth = document.getElementById("date-of-birth");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const dateOfBirthValue = dateOfBirth.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (firstNameValue === "") {
    setErrorFor(firstName, "O nome precisa ser preenchido");
  } else {
    setSuccessFor(firstName);
  }

  if (lastNameValue === "") {
    setErrorFor(lastName, "O sobrenome precisa ser preenchido");
  } else {
    setSuccessFor(lastName);
  }

  if (dateOfBirthValue === "") {
    setErrorFor(dateOfBirth, "A data de nascimento precisa ser preenchida");
  } else {
    setSuccessFor(dateOfBirth);
  }

  if (phoneValue.length > 15 || phoneValue.length < 14) {
    setErrorFor(phone, "Número de telefone inválido");
  } else {
    setSuccessFor(phone);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email precisa ser preenchido");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha precisa ser preenchida");
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "A senha precisa ser preenchida");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, " As senhas não conferem");
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

const handlePhone = (event) => {
  let input = event.target;
  input.value = applyPhoneMask(input.value);
};

const applyPhoneMask = (value) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
};
