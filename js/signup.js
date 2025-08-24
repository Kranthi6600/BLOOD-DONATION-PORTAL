const signupForm = document.getElementById('signup-form');

const showMessage = (msg, type) => {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = msg;
    messageDiv.style.color = type === 'error' ? 'rgba(255, 49, 49, 0.836)' : 'rgba(40, 173, 40, 0.9)';
    if (type === 'success') {
        setTimeout(() => {
            messageDiv.textContent = '';
        }, 3000);
    }
}


signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const capitalize = (str) => {
        return str
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };
    const firstName = signupForm.firstName.value.trim();
    const lastName = signupForm.lastName.value.trim();
    const email = signupForm.email.value.trim();
    const password = signupForm.password.value.trim();
    const confirmPassword = signupForm.confirmPassword.value.trim();

    document.getElementById('message').textContent = '';


    if (!firstName || !lastName || !password || !confirmPassword || !email) {
        showMessage(capitalize('please enter details'), 'error')
        return;
    }

    if (firstName === lastName) {
        showMessage('First Name and Last Name are same', 'error');
        return;
    };

    if (!email.endsWith('@gmail.com')) {
        showMessage('Email is Invalid', 'error')
        return;
    }

    if (password !== confirmPassword) {
        showMessage('Passwords are not matching', 'error');
        return;
    }

    const minLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[@#$%&*?!]/.test(password);

    if (!minLength) {
        showMessage(capitalize('password should at least 8 characters long'), 'error')
        return;
    }

    if (!hasNumber) {
        showMessage('Password must contain at least one number', 'error');
        return;
    }
    if (!hasSpecial) {
        showMessage('Password must contain at least one special character (@$!%*?&)', 'error');
        return;
    }


    let users = JSON.parse(localStorage.getItem('users')) || [];

    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
        showMessage(capitalize('email already exists'), 'error');
        return
    }

    const userData = { firstName, lastName, email, password };

    users.push(userData);

    localStorage.setItem('users', JSON.stringify(users));

    console.log(JSON.parse(localStorage.getItem('users')))

    document.getElementById('message').textContent = '';

    alert(capitalize('hurray sign up successful'));

    signupForm.reset()

});

const showPass = document.querySelectorAll('.eye-icon');
showPass.forEach(icon => {
    icon.addEventListener('click', () => {
        const input = icon.previousElementSibling;
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.replace('bx-hide', 'bx-show')
        } else {
            input.type = 'password';
            icon.classList.replace('bx-show', 'bx-hide')
        }
    });
});