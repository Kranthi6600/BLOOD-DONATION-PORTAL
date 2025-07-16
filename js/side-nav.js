window.addEventListener("DOMContentLoaded", () => {
    const layout = document.querySelector('.layout');

    fetch("side-nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("side-nav").innerHTML = data;


            const img1 = document.querySelector('.img1');
            const sideNav = document.querySelector('.side-nav');
            const menu = document.querySelector('.functionalities');

            const handleToggle = () => {
                const isDesktop = window.innerWidth >= 992;

                if (isDesktop) {
                    sideNav.classList.toggle('collapsed');
                    layout.classList.toggle('collapsed');

                    if (sideNav,classList.contains('collapsed')) {
                        menu.classList.remove('show');
                    } else {
                        menu.classList.add('show');
                    }
                } else {
                    menu.classList.toggle('show');
                }
            };

            const handleInitiateState = () => {
                const isDesktop = window.innerWidth >= 992;
                if (isDesktop && !sideNav.classList.contains('collapsed')) {
                    menu.classList.add('show');
                } else {
                    menu.classList.remove('show');
                }
            };
        
            img1.addEventListener('click', handleToggle);
            window.addEventListener('resize', handleInitiateState);
            
        });
});