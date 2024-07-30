
(() => {
    const refs = {
        openmenuBtn: document.querySelector('[menu-btn-open]'),
        closemenuBtn: document.querySelector('[menu-btn-close]'),
        menu: document.querySelector('[menu-overlay'),
        navStudio: document.querySelector('[menu-btn-studio'),
        navPortfolio: document.querySelector('[menu-btn-portfolio'),
        navContacts: document.querySelector('[menu-btn-contacts'),

    }

    refs.openmenuBtn.addEventListener('click', togglemenu);
    refs.closemenuBtn.addEventListener('click', togglemenu);
    refs.navStudio.addEventListener('click', togglemenu);
    refs.navPortfolio.addEventListener('click', closeModal);
    refs.navContacts.addEventListener('click', togglemenu);

    function togglemenu() {
        refs.menu.classList.toggle('is-open');
    }
    function closeModal() {
        refs.menu.classList.remove('is-open')
    }

    // TODO: Добавить отображение активных классов в меню по клику на навигационные ссылки
})();