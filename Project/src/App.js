import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DecadePage from "./Components/Pages/DecadePage";
import HomePage from "./Components/Pages/HomePage";
import FinalPage from "./Components/Pages/FinalPage";
import VideoPage from "./Components/Pages/VideoPage";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={HomePage} />
          <Route path="/final" exact component={FinalPage} />
          <Route path="/example" component={DecadePage} />
          <Route
            path="/video"
            exact
            component={VideoPage}
            render={(props) => <VideoPage {...props} url={"9ZkuqRGeLJM"} />}
          />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
