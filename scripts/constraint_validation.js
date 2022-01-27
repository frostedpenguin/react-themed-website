window.onload = function () {
  var password = document.getElementById("password");
  var password_repeat = document.getElementById("password_repeat");
  var age = document.getElementById('age');
  password.addEventListener("input", () => {
    checkPasswordValidity(password);
  });
  password_repeat.addEventListener("input", () => {
    checkPasswordMatch(password, password_repeat);
  });
  age.addEventListener("input", () => {
    checkAgeValidity(age);
  });
  
};
function checkPasswordMatch(password, password_repeat) {
  console.log(password.value, password_repeat.value);
  if (password.value !== password_repeat.value) {
    password_repeat.setCustomValidity("password does not match");
    return;
  }
  password_repeat.setCustomValidity("");
}
function checkPasswordValidity(password) {
  function hasLowerCase(str) {
    return /[a-z]/.test(str);
  }
  function hasUpperCase(str) {
    return /[A-Z]/.test(str);
  }
  function hasNumber(str) {
    return /[0-9]/.test(str);
  }

  var password_value = password.value;
  console.log(password_value.length < 8);
  if (password_value.length < 8) {
    password.setCustomValidity(
      "your password must be at least 8 characters long"
    );
    return;
  }
  if (!hasLowerCase(password_value)) {
    password.setCustomValidity(
      "your password must contain at least one lower case letter"
    );
    return;
  }
  if (!hasUpperCase(password_value)) {
    password.setCustomValidity(
      "your password must contain at least one upper case letter"
    );
    return;
  }
  if (!hasNumber(password_value)) {
    password.setCustomValidity(
      "your password must contain at least one number"
    );
    return;
  }
  password.setCustomValidity("");
};
function checkAgeValidity(age){
  if (age.value < 16){
    age.setCustomValidity('sorry, you are not old enough to join the site');  
    return
  }
  age.setCustomValidity('');
};