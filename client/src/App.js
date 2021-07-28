import "./App.css";
import Landing from "./screens/Landing/Landing";
import Game from "./screens/Game/Game";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/play">
        <Game />
      </Route>
      <Route exact path="/" >
        <Landing />
      </Route>
    </div>
  );
}

export default App;
