import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./pages/homescreen";
import NewEntry from "./pages/newEntry";
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
        <Route path="/home" exact component={HomeScreen} />
        <Route path="/newentry" exact component={NewEntry} />
      </Switch>
    </Router>
  );
}

export default App;
