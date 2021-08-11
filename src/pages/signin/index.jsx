import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import SigninContainer from './style';
import Form from '../../styles/Form';
import Title from '../../styles/Title';
import Validate from '../../utils/ValidateInputs';
import ModalComponent from '../../components/ModalComponent';

const Signin = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isWaitingServer, setWaitingServer] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setWaitingServer(true);
    const validation = Validate({ email }, 'signin');
    if (!validation.result) {
      setWaitingServer(false);
      setErrorMessage(validation.message);
      setModalOpen(true);
      return;
    }

    const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/signin`, { email, password });
    promise.then(({ data }) => {
      sessionStorage.setItem('session', JSON.stringify(data));
      history.push('/home');
      setWaitingServer(false);
    });
    promise.catch((err) => {
      setWaitingServer(false);
      if (!err.response) {
        setErrorMessage('Servidor fora do ar.');
        setModalOpen(true);
        return;
      }
      console.error(err.response.data);
      setErrorMessage(err.response.data);
      setModalOpen(true);
    });
  }

  function handleChange({ target }) {
    if (target.placeholder === 'E-mail') setEmail(target.value);
    else setPassword(target.value);
  }

  function CloseModal() {
    setModalOpen(false);
  }

  return (
    <SigninContainer>
      <Title>MyWallet</Title>

      <ModalComponent display={isModalOpen} close={CloseModal} message={errorMessage} />

      <Form onSubmit={handleSubmit}>
        <input type="text" placeholder="E-mail" onChange={handleChange} required />
        <input minLength="6" type="password" placeholder="Senha" onChange={handleChange} required />
        <button type="submit">
          {isWaitingServer
            ? (
              <Loader
                type="ThreeDots"
                color="#fff"
                height={20}
                width={75}
              />
            )
            : 'Entrar'}
        </button>
      </Form>
      <Link to="/signup">Primeira vez? Cadastre-se!</Link>
    </SigninContainer>
  );
};

export default Signin;
