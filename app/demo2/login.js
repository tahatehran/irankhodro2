const loginForm = document.querySelector('.login-form');
const errorMessage = document.querySelector('#error-message');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    if (username === '' || password === '') {
        errorMessage.textContent = 'لطفا همه فیلدها را پر کنید';
        errorMessage.style.display = 'block';
        errorMessage.classList.add('animated');
        errorMessage.classList.add('shake');
    } else {
        // Call API or perform login logic here
        console.log('Login successful!');
    }
});

// Add animation to the login container on hover
const loginContainer = document.querySelector('.login-container');
loginContainer.addEventListener('mouseover', () => {
    loginContainer.classList.add('animated');
    loginContainer.classList.add('pulse');
});

loginContainer.addEventListener('mouseout', () => {
    loginContainer.classList.remove('animated');
    loginContainer.classList.remove('pulse');
});