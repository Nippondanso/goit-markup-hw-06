(() => {
    const refs = {
        openModalBtn: document.querySelector('[modal-btn-open]'),
        closeModalBtn: document.querySelector('[modal-btn-close]'),
        modal: document.querySelector('[modal-overlay'),
    }

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-open');
    }

})();