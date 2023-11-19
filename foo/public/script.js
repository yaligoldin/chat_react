// Function to handle registration
function register() {
  var username = document.getElementById('register-username');
  var usernameValue = username.value;
  var password = document.getElementById('register-password');
  var passwordValue = password.value;

  // Check if username is already registered
  if (sessionStorage.getItem(usernameValue)) {
    setError(username, 'Username already exists. Please choose a different username.')
    return 0;
  }

  // Store username and password in local storage
  sessionStorage.setItem(usernameValue, passwordValue);

  // Clear registration inputs
  document.getElementById('register-username').value = '';
  document.getElementById('register-password').value = '';

  return 1;
}

// Function to handle login
function login() {
  var username = document.getElementById('login-username');
  var usernameValue = username.value;
  var password = document.getElementById('login-password');
  var passwordValue = password.value;

  if (!sessionStorage.getItem(usernameValue)) {
    setError(username, "Username doesn't exist.");
    return 0;
  }
  // Check if username exists and the password matches
  if (sessionStorage.getItem(usernameValue) !== passwordValue) {
    setError(password, 'Wrong password.')
    return 0;
  } else {
    sessionStorage.setItem('isLoggedIn', 'true');
  }

  // Clear login inputs
  document.getElementById('login-username').value = '';
  document.getElementById('login-password').value = '';
  return 1;
}
