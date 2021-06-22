import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./pages/signin/index";
import Signup from "./pages/signup";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
