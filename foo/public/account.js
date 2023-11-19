// Function to handle registration
function register() {
    var username = document.getElementById('register-username').value;
    var password = document.getElementById('register-password').value;
    
    // Check if username is already registered
    if (localStorage.getItem(username)) {
      document.getElementById('message').innerHTML = 'Username already exists. Please choose a different username.';
      return;
    }
    
    // Store username and password in local storage
    localStorage.setItem(username, password);
    
    document.getElementById('message').innerHTML = 'Registration successful. You can now log in.';
  }
  
  // Function to handle login
  function login() {
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;
    
    // Check if username exists and the password matches
    if (localStorage.getItem(username) === password) {
      document.getElementById('message').innerHTML = 'Login successful. Welcome, ' + username + '!';
      // Perform further actions or redirect to another page
    } else {
      document.getElementById('message').innerHTML = 'Invalid username or password.';
    }
    
  }
  