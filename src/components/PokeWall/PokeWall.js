import { useState, useEffect } from "react";
import Ash from "../Ash/Ash";
import PokePic from "../PokePic/PokePic";
import styles from "./PokeWall.module.css";
const PokeWall = ({ top, left }) => {
  const [pokeArray, setPokeArray] = useState([]);
  useEffect(() => {
    for (let i = 1; i < 152; i++) {
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
  return (
    <div styles={{ width: "auto" }}>
      <div className={styles.pokeWall}>
        {pokeArray.map((pic, index) => {
          return <PokePic key={index} source={pic} />;
        })}
      </div>
      <div className={styles.pokeFloor}>
        <Ash top={top} left={left} />
      </div>
    </div>
  );
};

export default PokeWall;
