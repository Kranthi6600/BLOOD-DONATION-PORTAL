const loginForm = document.getElementById('login-form')

const showMessage = (msg, type) => {
    const messageDiv = document.querySelector('.message');
    messageDiv.textContent = msg;
    messageDiv.style.color = type === 'error' ? 'rgba(255, 49, 49, 0.836)' : 'rgba(54, 235, 54, 0.86)';

    if (type === 'success') {
        setTimeout(() => {
            messageDiv.textContent === '';
        }, 3000);
    }
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm.email.value.trim();
    const password = loginForm.password.value.trim();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
        showMessage('Redirecting to Home Page', 'success');
        setTimeout(() => {
            window.location.href = 'home-page.html'
        }, 1000);

    } else {
        showMessage('Invalid Email or Password', 'error');
    }

});


const showPass = document.querySelectorAll('.eye-icon');
showPass.forEach(icon => {
    icon.addEventListener('click', () => {
        const input = icon.previousElementSibling;
        if(input.type === 'password'){
            input.type = 'text';
            icon.classList.replace('bx-hide', 'bx-show');
        } else {
            input.type = 'password';
            icon.classList.replace('bx-show', 'bx-hide');
        }
    });
});