(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-btn-open]'),
        closeModalBtn: document.querySelector('[data-modal-btn-close]'),
        modal: document.querySelector('[data-modal-overlay'),
    }

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-open');
    }

})();