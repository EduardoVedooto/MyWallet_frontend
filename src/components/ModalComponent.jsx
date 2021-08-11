import Modal from 'react-modal';
import styled from 'styled-components';

const ModalComponent = (props) => {
  Modal.setAppElement('#root');
  const { display, close, message } = props;

  const style = {
    overlay: {
      backgroundColor: 'rgba(255,255,255,.3)',
      display: 'flex',
    },
    content: {
      borderRadius: '.5rem',
      height: '20rem',
      width: '60%',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: 'var(--color-primary)',
      border: 'none',
    },
  };

  return (
    <Modal
      isOpen={display}
      contentLabel="Warnings"
      onRequestClose={close}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      style={style}

    >
      <Message>{message}</Message>
      <Button onClick={close}>Fechar</Button>
    </Modal>
  );
};

const Message = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  user-select: none;
  word-break: break-word;
  text-align: center;
`;

const Button = styled.button`
  color: #fff;
  border: none;
  background-color: #A328D68C;
  padding: 1rem 2rem;
  border-radius: .5rem;
  cursor: pointer;
`;

export default ModalComponent;
