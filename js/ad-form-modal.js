import {isEscapeKey} from './util.js';

const body = document.querySelector('body');
const successModalTemplate = body.querySelector('#success').content.querySelector('.success');
const successModal = successModalTemplate.cloneNode(true);
const errorModalTemplate = body.querySelector('#error').content.querySelector('.error');
const errorModal = errorModalTemplate.cloneNode(true);

const addModal = (modal) => {
  body.append(modal);

  const onPopupEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      removeModal();
    }
  };

  const onScreenClick = (evt) => {
    if (evt.target === modal) {
      removeModal();
    }
  };

  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onScreenClick);

  if (modal.classList.contains('error')) {
    const modalClose = modal.querySelector('.error__button');

    const onModalCloseClick = () => {
      removeModal();
      modalClose.removeEventListener('click', onModalCloseClick);
    };

    modalClose.addEventListener('click', onModalCloseClick);
  }

  function removeModal () {
    modal.remove();

    document.removeEventListener('keydown', onPopupEscKeydown);
    document.removeEventListener('click', onScreenClick);
  }
};

export {
  addModal,
  successModal,
  errorModal
};
