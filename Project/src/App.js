import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DecadePage from "./Components/Pages/DecadePage";
import HomePage from "./Components/Pages/HomePage";
import FinalPage from "./Components/Pages/FinalPage";
import HistoryInfo from "./Components/HistoryInfo";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={HomePage} />
          <Route path="/final" exact component={FinalPage} />
          <Route path="/tl" component={DecadePage} />
          <Route path="/hist" component={HistoryInfo} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
