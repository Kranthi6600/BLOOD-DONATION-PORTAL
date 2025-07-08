const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

// Open sidebar on page load
window.addEventListener('DOMContentLoaded', () => {
  sidebar.classList.add('active');
});

// Toggle on click
hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
