import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pokemons from "./components/Pokemons";
import Catches from "./components/Catches";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <h3>hola</h3>
          </Route>
          <Route path="/pokemons" exact>
            <Pokemons />
          </Route>
          <Route path="/catches" exact>
            <Catches />
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
