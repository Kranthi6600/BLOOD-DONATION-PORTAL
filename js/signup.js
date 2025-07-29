const signupForm = document.getElementById('signup-form');

const showMessage = (msg, type) => {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = msg;
    messageDiv.style.color = type === 'error' ? 'red' : 'green'
}

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = signupForm.username.value.trim();
    const email = signupForm.email.value.trim();
    const password = signupForm.password.value.trim();
    const confirmPassword = signupForm.confirmPassword.value.trim();

    if(!email.endsWith('@gmail.com')){
        showMessage('Invalid Email Address...', 'error');
        return;
    }

    if(password !== confirmPassword){
        showMessage("Passwords aren't matching...", 'error');
        return;
    }
})