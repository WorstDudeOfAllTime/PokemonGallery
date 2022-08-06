import "./App.css";
import PokeWall from "./components/PokeWall/PokeWall";
import { useState } from "react";
import WelcomePage from "./components/WelcomePage/WelcomePage";

function App() {
  const [welcome, setWelcome] = useState(false);
  const [top, setTop] = useState(400);
  const [left, setLeft] = useState(0);
  function keyHandler(e) {
    if (e.key === "d") {
      setLeft(left + 10);
    } else if (e.key === "w") {
      if (top <= 320) {
        return;
      }
      setTop(top - 10);
    } else if (e.key === "s") {
      if (top >= 410) {
        return;
      }
      setTop(top + 10);
    } else if (e.key === "a") {
      if (left <= 0) {
        return;
      }
      setLeft(left - 10);
    }
  }
  return (
    <div className="App" onKeyDown={(e) => keyHandler(e)} tabIndex="0">
      {!welcome ? (
        <WelcomePage setWelcome={setWelcome} />
      ) : (
        <PokeWall top={top} left={left} />
      )}
    </div>
  );
}

export default App;
