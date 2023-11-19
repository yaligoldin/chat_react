const form = document.getElementById('form');
const username = document.getElementById('register-username');
const password = document.getElementById('register-password');
const password2 = document.getElementById('password2');
const display = document.getElementById('displayName');
const picture = document.getElementById('picture');

form.addEventListener('submit', e => {
    e.preventDefault();
    if (validateInputs() && register()) {
        window.location.href = 'login.html';
    }
});

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



const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const displayValue = display.value.trim();
    const pictureValue = picture.value.trim();

    check = 1;
    if (usernameValue === '') {
        setError(username, 'Username is required');
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

var loadFile = function (event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
};
