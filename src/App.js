import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Pokemons from "./components/Pokemons";



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
          <Link to="/pokemons">
            pokemons
          </Link>
          </Route>
          <Route path="/pokemons" exact>
            <Pokemons />
          </Route>
          <Route path="*">
            NO SUCH PATH: <code>{window.location.href}</code>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
