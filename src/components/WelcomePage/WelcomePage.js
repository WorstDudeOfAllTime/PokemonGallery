import { useState } from "react";
import styles from "./WelcomePage.module.css";
import pokeLogo from "../../img/pokemonlogo.webp";

const WelcomePage = ({ setWelcome }) => {
  return (
    <div className={styles.welcomeBox}>
      <img className={styles.logo} src={pokeLogo} />
      <h1>WELCOME TO THE MUSEUM</h1>
      <button className={styles.pokeButton} onClick={() => setWelcome(true)}>
        Enter!
      </button>
    </div>
  );
};

export default WelcomePage;
