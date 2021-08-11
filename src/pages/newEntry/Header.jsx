import { HeaderContainer } from './style';

const Header = ({ type }) => (
  <HeaderContainer>
    Nova {type === 'income' ? 'entrada' : 'saída'}
  </HeaderContainer>
);

export default Header;
