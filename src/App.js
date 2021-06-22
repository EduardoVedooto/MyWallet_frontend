import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./pages/signin/Signin";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path="/signin" exact component={Signin} />
      </Switch>
    </Router>
  );
}

export default App;
