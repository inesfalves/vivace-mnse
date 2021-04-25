import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DecadePage from "./Components/Pages/DecadePage";
import HomePage from "./Components/Pages/HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={HomePage} />
        </div>
      </Switch>
      <Switch>
        <Route path="/example" component={DecadePage} />
      </Switch>
    </Router>
  );
}

export default App;
