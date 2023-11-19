import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const RegisterScreen = ({ users, registerUser, setAuth }) => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    var nickname = document.getElementById('displayName');
    var nicknameValue = nickname.value;
    const picture = document.getElementById('output'); 
    const pictureValue = picture.src;

      if (validateInputs() && register()) {
        setAuth(true);
        navigate('/chats', {
          state: {
            name: nicknameValue,
            picture: pictureValue
          }
        })
      } 
    }
  function isUsernameTaken(username) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        return true; // Username exists in the array
      }
    }
    return false; // Username doesn't exist in the array
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

function register() {
  const username = document.getElementById('register-username');
  const password = document.getElementById('register-password'); 
  const display = document.getElementById('displayName'); 
  const picture = document.getElementById('output'); 
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const displayValue = display.value.trim();
  const pictureValue = picture.src;

  if(isUsernameTaken(usernameValue)) {
    setError(username, 'Username already exists. Please choose a different one.');
    return 0;
  }
  registerUser(usernameValue, passwordValue, displayValue, pictureValue);

  // Clear registration inputs
  document.getElementById('register-username').value = '';
  document.getElementById('register-password').value = '';

  return 1;
}

var loadFile = (event) => {
  const file = event.target.files[0];
  const output = document.getElementById('output');
  
  if (file) {
    const imageURL = URL.createObjectURL(file);
    output.src = imageURL;
    console.log(imageURL);
  } else {
    output.src = 'empty.png';
    console.log(output.src);
  }
}

const validateInputs = () => {
  const username = document.getElementById('register-username');
  const password = document.getElementById('register-password'); 
  const password2 = document.getElementById('password2');
  const display = document.getElementById('displayName'); 
  const picture = document.getElementById('picture'); 
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const displayValue = display.value.trim();
  const pictureValue = picture.value.trim();

  var check = 1;
  if (usernameValue === '') {
      setError(username, 'Username is required');
      check = 0;
  } else if (usernameValue.includes(' ')) {
    setError(username, 'Username cannot contain spaces');
    check = 0;
  } else {
      setSuccess(username);
  }

  if (password2Value === '') {
      setError(password2, 'Password verification is required');
      check = 0;
  } else if (password2Value !== passwordValue) {
      setError(password2, "Passwords don't match");
      check = 0;
  } else {
      setSuccess(password2);
  }

  if (displayValue === '') {
      setError(display, 'Display name is required');
      check = 0;
  } else {
      setSuccess(display);
  }

  if (pictureValue === '') {
      setError(picture, 'Profile picture is required');
      check = 0;
  } else {
      setSuccess(picture);
  }

  if (passwordValue === '') {
      setError(password, 'Password is required');
      check = 0;
  } else if (passwordValue.length < 6) {
      setError(password, 'Password must be at least 6 character.')
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
  <title>Register screen</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="register.css" />
  <div className="container">
    <form onSubmit={handleSubmit} action="chats.html" id="form">
      <div className="image">
        <img src="logoWithSub.png" height={250} alt='logoAndSub' />
      </div>
      <div className="inputs">
        <div className="input-control">
          <div style={{ float: "left" }}>
            <label htmlFor="register-username">Username:</label>
          </div>
          <input id="register-username" name="register-username" type="text" />
          <div id="message" className="error" />
        </div>
        <div className="input-control">
          <div style={{ float: "left" }}>
            <label htmlFor="register-password">Password:</label>
          </div>
          <input
            id="register-password"
            name="register-password"
            type="password"
          />
          <div className="error" />
        </div>
        <div className="input-control">
          <div style={{ float: "left" }}>
            <label htmlFor="password2">Verify Password:</label>
          </div>
          <input id="password2" name="password2" type="password" />
          <div className="error" />
        </div>
        <div className="input-control">
          <div style={{ float: "left" }}>
            <label htmlFor="displayName">Display Name:</label>
          </div>
          <input id="displayName" name="displayName" type="text" />
          <div className="error" />
        </div>
        <div className="input-control">
          <div style={{ float: "left" }}>
            <label htmlFor="picture">Profile Picture:</label>
          </div>
          <input
            type="file"
            id="picture"
            accept="image/*"
            onChange={(event) => loadFile(event)}
          />
          <br />
          <div className="error" />
          <img src = {'empty.png'} id="output" height="100px" alt='keepEmpty'/>
        </div>
      </div>
      <div className="buttons">
        <button style={{ fontSize: "larger" }} type="submit">
          Register
        </button>
        <br />
        <br />
          Already registered?
          <Link to="/"> Click here</Link> to log in
      </div>
    </form>
  </div>
</>

  )
}

export default RegisterScreen;
