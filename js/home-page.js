const img1 = document.querySelector('.img1');
const sideNav = document.querySelector('.side-nav');
const menu = document.querySelector('.functionalities');
const layout = document.querySelector('.layout');

img1.addEventListener('click', () => {
  const isDesktop = window.innerWidth >= 992;

  if (isDesktop) {
    sideNav.classList.toggle('collapsed');
    layout.classList.toggle('collapsed');

    if (sideNav.classList.contains('collapsed')) {
      menu.classList.remove('show');
    } else {
      menu.classList.add('show');
    }
  } else {
    menu.classList.toggle('show');
  }
});


window.addEventListener('DOMContentLoaded', () => {
  const isDesktop = window.innerWidth >= 992;

  if (isDesktop) {
    if (!sideNav.classList.contains('collapsed')) {
      menu.classList.add('show');
    }
  } else {
    menu.classList.remove('show');
  }
});

window.addEventListener('resize', () => {
  const isDesktop = window.innerWidth >= 992;

  if (isDesktop) {
    if (!sideNav.classList.contains('collapsed')) {
      menu.classList.add('show');
    } else {
      menu.classList.remove('show');
    }
  } else {
    menu.classList.remove('show');
  }
});
