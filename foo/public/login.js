const form = document.getElementById('form');
const username = document.getElementById('login-username');
const password = document.getElementById('login-password');

form.addEventListener('submit', e => {
    e.preventDefault();
    if (validateInputs() && login()) {
        window.location.href = 'chats.html';
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
    check = 1;
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
