function validate(){
  var username = document.getElementById('username').value;
  var usernameRegex = /^[a-zA-Z]{1}[a-zA-Z0-9]{4,8}$/;
  var usernameResult = usernameRegex.test(username);

  if (usernameResult == false) {
    return alert('Name is invalid');
  }

  var password = document.getElementById('password').value;
  var passwordRegex = /^(?=.{8,}$)(?=.*[A-Z])(?=.*[0-9])(?=.*[=]).*[a-z\W]*$/;
  var passwordResult = passwordRegex.test(password);

  if (passwordResult == false) {
    return alert('Password is invalid');
  }

  return alert('Success');
};
