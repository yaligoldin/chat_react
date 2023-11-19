import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const LoginScreen = ({ users, setAuth }) => {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    var username = document.getElementById('login-username');
    var usernameValue = username.value;
    var picture = getPictureByUsername(usernameValue);
    var nickname = getDisplayNameByUsername(usernameValue);
    if (validateInputs() && login()) {
      setAuth(true);
      navigate('/chats', {
        state: {
          name: nickname,
          picture: picture
        }
      });
    }
  };
  
  function isUsernameTaken(username) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        return true; // Username exists in the array
      }
    }
    return false; // Username doesn't exist in the array
  }

  function getPictureByUsername(username) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        return users[i].picture;
      }
    }
    return null; // Return null if no matching username is found
  }
  function getDisplayNameByUsername(username) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        return users[i].displayName;
      }
    }
    return null; // Return null if no matching username is found
  }

  function isUserValid(username, password) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username && users[i].password === password) {
        return true; // Username and password match
      }
    }
    return false; // Username and password do not match
  }

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

function login() {
  var username = document.getElementById('login-username');
  var usernameValue = username.value;
  var password = document.getElementById('login-password');
  var passwordValue = password.value;

  if (!isUsernameTaken(usernameValue)) {
    setError(username, "Username doesn't exist.");
    return 0;
  }
  // Check if username exists and the password matches
  if (!isUserValid(usernameValue, passwordValue)) {
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

const validateInputs = () => {
    const username = document.getElementById('login-username');
    const password = document.getElementById('login-password');
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    var check = 1;
    if (usernameValue === '') {
        setError(username, 'Username is required');
        check = 0;
    } else {
        setSuccess(username);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
        check = 0;
    } else {
        setSuccess(password);
    }
    return check;
};
  return (
    <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login screen</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="login.css" />
    <div className="container">
      <form onSubmit={handleSubmit} action="/chats" id="form">
        <div className="image">
          <img src="logoWithSub.png" height="250px" alt='logo'/>
        </div>
        <div className="input-control">
          <label htmlFor="login-username">Username:</label>
          <input id="login-username" name="login-username" type="text" />
          <div className="error" />
        </div>
        <br />
        <div className="input-control">
          <label htmlFor="login-password">Password:</label>
          <input id="login-password" name="login-password" type="password" />
          <div id="message" className="error" />
        </div>
        <div className="buttons">
          <button style={{ fontSize: "larger" }} type="submit">
            Log in
          </button>
          <br />
          <br />
          Don't have an account?
          <Link to="/register">Click here</Link> to register
        </div>
      </form>
    </div>
  </>)
}

export default LoginScreen;
