import { RiLogoutBoxRLine } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { HeaderContainer } from './style';

const Header = ({ user }) => {
  const { name, id } = user;
  const history = useHistory();

  function logout() {
    if (window.confirm('Encerrar sessões?')) {
      axios.delete(`${process.env.REACT_APP_API_BASE_URL}/logout/${id}`)
        .then(() => {
          history.push('/signin');
          sessionStorage.removeItem('session');
        })
        .catch((e) => {
          console.error(e.response);
          window.location.reload();
        });
    }
  }

  return (
    <HeaderContainer>
      <h1>Olá, {name.split(' ')[0]}</h1>
      <IconContext.Provider value={{ size: '2.3em', color: '#fff', title: 'Sair da conta' }}>
        <RiLogoutBoxRLine onClick={logout} />
      </IconContext.Provider>
    </HeaderContainer>
  );
};

export default Header;
