import { HomeScreenContainer } from "./style";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Footer from "./Footer";

const HomeScreen = () => {
  return (
    <HomeScreenContainer>
      <Header />
      <Dashboard />
      <Footer />
    </HomeScreenContainer>
  );
}

export default HomeScreen;