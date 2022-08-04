import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    for (let i = 1; i < 151; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        .then((res) => res.json())
        .then((data) =>
          setPokeArray((pokeArray) => [
            ...pokeArray,
            data.sprites.front_default,
          ])
        );
    }
  }, []);

  const [poke, setPoke] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [pokeArray, setPokeArray] = useState([]);
  return (
    <div className="App">
      {pokeArray.map((pic) => {
        return <img src={pic} />;
      })}
    </div>
  );
}

export default App;
