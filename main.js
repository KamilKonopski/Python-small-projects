const submitButton = document.getElementById('submit');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailAddressInput = document.getElementById('email-address');
const passwordInput = document.getElementById('password');
const firstError = document.getElementById('first');
const lastError = document.getElementById('last');
const emailError = document.getElementById('email');
const passError = document.getElementById('pass');

const sendForm = event => {
    event.preventDefault()
    const validRegex  = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(firstNameInput.value === "") {
        firstError.textContent = 'First Name cannot be empty';
        firstNameInput.classList.add('error-icon');
    } 

    if(lastNameInput.value === "") {
        lastError.textContent = 'Last Name cannot be empty';
        lastNameInput.classList.add('error-icon');
    } 

    if(emailAddressInput.value === "") {
        emailError.textContent = 'Email address cannot be empty';
        emailAddressInput.classList.add('error-icon');
    }else if(!emailAddressInput.value.match(validRegex)) {
        emailError.textContent = 'Looks like this is not an email';
        emailAddressInput.classList.add('error-icon');
    }

    if(passwordInput.value === "") {
        passError.textContent = 'Password cannot be empty';
        passwordInput.classList.add('error-icon');
    }
}

submitButton.addEventListener('click', sendForm);