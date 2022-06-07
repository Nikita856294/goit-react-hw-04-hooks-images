import styled from 'styled-components';

const OverlayModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-content: center;
  height: 300px;
  max-width: 500px;
  width: 100%;
  padding: 15px;
  border-radius: 3px;
`;

export { OverlayModal, ModalWindow };
