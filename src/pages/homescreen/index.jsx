import { useHistory } from 'react-router-dom';
import { HomeScreenContainer } from './style';
import Header from './Header';
import Dashboard from './Dashboard';
import Footer from './Footer';

const HomeScreen = () => {
  const history = useHistory();
  const session = JSON.parse(sessionStorage.getItem('session'));

  if (!session) {
    window.alert('Sessão expirada. Por favor, faça login novamente');
    history.push('/signin');
    return null;
  }
  return (
    <HomeScreenContainer>
      <Header user={session.user} />
      <Dashboard token={session.token} />
      <Footer id={session.user.id} />
    </HomeScreenContainer>
  );
};

export default HomeScreen;
