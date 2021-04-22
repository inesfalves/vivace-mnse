import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import DecadePage from "./Components/Pages/DecadePage";
import HomePage from "./Components/Pages/HomePage";

function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/example" component={DecadePage}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
