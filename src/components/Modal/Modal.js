import { Component } from 'react';
import { createPortal } from 'react-dom';
import { OverlayModal, ModalWindow } from './ModalStyled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    const { toggleModal } = this.props;
    if (e.key === 'Escape') {
      toggleModal();
    }
  };
  handleBackDropClick = e => {
    const { toggleModal } = this.props;
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <OverlayModal className="overlay" onClick={this.handleBackDropClick}>
        <ModalWindow className="modal">{children}</ModalWindow>
      </OverlayModal>,
      modalRoot
    );
  }
}
export default Modal;
