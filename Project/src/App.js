import "./App.css";
import Button from "./Components/Button.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>VIVACE</h1>
        <p className="App-desc">An interactive timeline for pop music lovers</p>
      </header>
      <Button></Button>
      <p className="App-desc">Press Play to continue</p>
    </div>
  );
}

export default App;
