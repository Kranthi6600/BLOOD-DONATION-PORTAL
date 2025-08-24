const addUserImg = document.getElementById('add-userImg');
const formOverlay = document.getElementById('new-userForm');
const addUserBtn = document.getElementById('add-userBtn');
const closeformBtn = document.getElementById('close-formBtn');
const userForm = document.getElementById('user-form');
const userTable = document.getElementById('user-table').querySelector('tbody');

const showMessage = (msg, type, autoClear = true) => {
    const messageDiv = document.querySelector('.message');
    messageDiv.textContent = msg;
    messageDiv.style.color = type === 'error' ? 'red' : 'green';

    if (autoClear && type === 'error') {
        setTimeout(() => {
            messageDiv.textContent = '';
        }, 4000);
    }
}

addUserImg.addEventListener('click', () => {
    formOverlay.style.display = 'flex';
});

closeformBtn.addEventListener('click', () => {
    formOverlay.style.display = 'none';
});

userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(userForm);
    const newUserData = Object.fromEntries(formData.entries());

    for (let key in newUserData) {
        if (typeof newUserData[key] === 'string') {
            newUserData[key] = newUserData[key].trim();
        }
    }


    const allEmpty = Object.values(newUserData).every(value => value === '')

    if (allEmpty) {
        showMessage('Enter all the Details', 'error', false);
        return;
    }

    if (!newUserData.name) {
        showMessage('Please Enter Your Name', 'error');
        return;
    }
    if (!newUserData.gender) {
        showMessage('Please Enter Your Gender', 'error');
        return;
    }
    if (!newUserData.contact) {
        showMessage('Please Enter Your Contact or Mobile number', 'error');
        return;
    }
    if (!newUserData.age) {
        sho4wMessage('Please Enter Your Age', 'error');
        return;
    }
    if (!newUserData.address) {
        showMessage('Please Enter Your Address', 'error');
        return;
    }
    if (!newUserData.healthIssues) {
        showMessage('Please Enter Your Health Issues if there no issues then give NONE', 'error');
        return;
    }


    const newRow = document.createElement('tr');

    const sNo = userTable.rows.length + 1;

    newRow.innerHTML = `
        <th scope="row">${sNo}</th>
        <td>${newUserData.name}</td>
        <td>${newUserData.gender}</td>
        <td>${newUserData.contact}</td>
        <td>${newUserData.age}</td>
        <td>${newUserData.address}</td>
        <td>${newUserData.healthIssues}</td>
        <td>
        <img src="../assets/images/hamburger-menu-dots-svgrepo-com.svg" alt="img" class="hamburger view m-2">
        </td>
        `
    userTable.appendChild(newRow);

    userForm.reset();

    formOverlay.style.display = 'none';
});


const hamburgerIcons = document.querySelectorAll('.hamburger');
const optionsBox = document.getElementById('options-box');
const closeOptionsBtn = document.getElementById('close-options');

userTable.addEventListener('click', (e) => {
  if (e.target.classList.contains('hamburger')) {
    e.stopPropagation();
    
    const rect = e.target.getBoundingClientRect();
    optionsBox.style.top = `${rect.top + window.scrollY}px`;
    optionsBox.style.left = `${rect.right + -110 + window.scrollX}px`;
    optionsBox.style.display = 'block';
  }
});

document.addEventListener('click', (e) => {
  if (!optionsBox.contains(e.target) && !e.target.classList.contains('hamburger')) {
    optionsBox.style.display = 'none';
  }
});

closeOptionsBtn.addEventListener('click', ()=> {
    optionsBox.style.display = 'none'  
});

const viewOption = document.getElementById('view-option');
viewOption.addEventListener('click', ()=>{
    
})