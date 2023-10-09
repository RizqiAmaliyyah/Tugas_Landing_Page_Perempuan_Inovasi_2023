// script.js

//No 6
function handleGetFormData() {
  var name = document.getElementById("name").value;
  var city = document.getElementById("city").value;
  var email = document.getElementById("email").value;
  var zipCode = document.getElementById("zip-code").value;
  var status = document.getElementById("status").checked;

  var formData = {
      name: name,
      city: city,
      email: email,
      zipCode: zipCode,
      status: status
  };

  return formData;
}

document.getElementById("submit-form").addEventListener("click", function (e) {
  e.preventDefault();

  var formData = handleGetFormData();

  console.log(formData);
});

// No 7
function isNumber(inputString) {

  return !isNaN(inputString);
}

document.getElementById("submit-form").addEventListener("click", function (e) {
  e.preventDefault();

  var zipCode = document.getElementById("zip-code").value;

  if (isNumber(zipCode)) {
      console.log("Input zip-code adalah angka.");
  } else {
      console.log("Input zip-code bukan angka.");
  }
});

// No 8
function checkboxIsChecked() {
  var checkbox = document.getElementById("status");

  return checkbox.checked;
}

document.getElementById("submit-form").addEventListener("click", function (e) {
  e.preventDefault();

  if (checkboxIsChecked()) {
      console.log("Kotak centang dicentang. Proses submit dapat dilanjutkan.");
  } else {
      console.log("Kotak centang harus dicentang sebelum submit.");
  }
});

// No 9
function validateFormData(data){
if (data !== null && 
  isNumber(data.zipCode) &&
  checkboxIsChecked()){
  return true;
}
return false;
}

//No 10
function submit() {
event.preventDefault();

const formData = handleGetFormData();
const isValid = validateFormData(formData);
const warningDiv = document.getElementById('warning');

if (!isValid) {
  warningDiv.textContent = "Periksa form anda sekali lagi";
} else {
  warningDiv.textContent = "";
}
}

const form = document.querySelector("form");
form.addEventListener("submit", submit);