document.querySelectorAll('.card-main').forEach(cardMain => {
    const card = cardMain.querySelector('.card');
    const info = cardMain.querySelector('.brief-info');

    card.addEventListener('click', () => {
        info.classList.toggle('show-info');
    });
});
