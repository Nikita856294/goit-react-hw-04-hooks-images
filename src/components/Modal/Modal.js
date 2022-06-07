import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { OverlayModal, ModalWindow } from './ModalStyled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ toggleModal, children }) => {
  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      toggleModal();
    }
  };
  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
  return createPortal(
    <OverlayModal className="overlay" onClick={handleBackDropClick}>
      <ModalWindow className="modal">{children}</ModalWindow>
    </OverlayModal>,
    modalRoot
  );
};
export default Modal;
