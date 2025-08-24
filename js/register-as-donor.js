const showMessage = (msg, type, autoClear = true) => {
    const messageDiv = document.querySelector('.message');
    messageDiv.textContent = msg;
    messageDiv.style.color = type === 'error' ? 'red' : 'green';

    if (autoClear && type === 'error') {
        setTimeout(() => {
            messageDiv.textContent = '';
        }, 3000);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    console.log(users);
})


const donorForm = document.querySelector('.form-div');
donorForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(donorForm);
    const donorData = Object.fromEntries(formData.entries());

    for (let key in donorData) {
        if (typeof donorData[key] === 'string') {
            donorData[key] = donorData[key].trim();
        }
    }

    const allEmpty = Object.values(donorData).every(value => value === '');

    if (allEmpty) {
        showMessage('Please Enter Your Details', 'error', false);
        return;
    }
    if (!donorData.firstName) {
        showMessage('Please Enter Your First Name', 'error');
        return;
    }
    if (!donorData.lastName) {
        showMessage('Please Enter Your Last Name', 'error');
        return;
    }
    if (!donorData.email) {
        showMessage('Please Enter Your Email', 'error');
        return;
    }

    const minLength = donorData.password.length >= 8;
    const hasNumber = /\d/.test(donorData.password);
    const hasSpecial = /[@#$%&*?!]/.test(donorData.password);

    if (!minLength) {
        showMessage('Password should contain atleast 8 characters', 'error');
        return;
    }

    if (!hasNumber) {
        showMessage('Password should contain atleast one Number character', 'error');
        return;
    }

    if (!hasSpecial) {
        showMessage('Password should contain atleast one Special character', 'error');
        return;
    }

    if (!donorData.address) {
        showMessage('Please Enter Your Address', 'error');
        return;
    }
    if (!donorData.city) {
        showMessage('Please Enter Your City Name', 'error');
        return;
    }
    if (!donorData.state) {
        showMessage('Please Enter Your State Name', 'error');
        return;
    }
    if (!donorData.zipCode) {
        showMessage('Please Enter Your Zip Code', 'error');
        return;
    }


    let users = JSON.parse(localStorage.getItem('users')) || [];
    // console.log(users)

    const userData = { donorData };
    users.push(donorData);

    localStorage.setItem('users', JSON.stringify(users));

    console.log(JSON.parse(localStorage.getItem('users')));

    window.location.href = 'donor-list.html';

    alert('REGISTRATION SUCCESSFUL 🎉, Redirecting to Donor List', 'success');

});

const showPass = document.querySelectorAll('.eye-icon');

showPass.forEach(icon => {
    icon.addEventListener('click', () => {
        const input = icon.previousElementSibling;
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.replace('bx-show', 'bx-hide');
        } else {
            input.type = 'password';
            icon.classList.replace('bx-hide', 'bx-show');
        }
    });
});
