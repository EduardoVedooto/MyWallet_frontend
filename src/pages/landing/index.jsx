import { useHistory } from 'react-router-dom';
import {
  LandingComponent, Footer, Button, SubTitle, TitleModified as Title,
} from './style';

const LandingPage = () => {
  const history = useHistory();
  return (
    <LandingComponent>
      <Title>My Wallet</Title>
      <SubTitle>Controle sua vida financeira de forma fácil</SubTitle>
      <Footer>
        <Button onClick={() => history.push('/signin')}>Login</Button>
        <Button onClick={() => history.push('/signup')}>Cadastro</Button>
      </Footer>
    </LandingComponent>
  );
};

export default LandingPage;
