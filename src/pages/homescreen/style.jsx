import styled from 'styled-components';

const HomeScreenContainer = styled.main`
  min-height: 100vh;
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 2.4rem;
`;

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;
  
  h1{
    color: #fff;
    font-size: 2.6rem;
    font-weight: 700;
    user-select: none;
  }

  svg {
    cursor: pointer;
  }

`;

const LoaderContainer = styled.div`
  margin: auto;
`;

const DashboardContainer = styled.section`
  width: 100%;
  background-color: #fff;
  border-radius: .5rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: 0 1rem 1rem 1rem;
  height: 0;

  &>p {
    color: #868686;
    font-size: 2rem;
    text-align: center;
    margin: auto;
    user-select: none;
  }
`;

const DashboardContent = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Total = styled.div`
  width: 100%;
  font-size: 1.8rem;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  margin-top: auto;
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto; 

`;

const Item = styled.li`
  width: 100%;
  display: flex;
  font-size: 1.6rem;
  margin: .5rem 0;
`;

const Date = styled.span`
  color: #C6C6C6;
  margin-right: 1rem;
`;

const Description = styled.span`
  color: #000;
`;

const Value = styled.span`
  color: ${(props) => (props.type === 'income' ? '#03AC00' : '#C70000')};
  margin-left: auto;
`;

export {
  HomeScreenContainer,
  HeaderContainer,
  DashboardContainer,
  LoaderContainer,
  DashboardContent,
  Total,
  List,
  Item,
  Date,
  Description,
  Value,
};
