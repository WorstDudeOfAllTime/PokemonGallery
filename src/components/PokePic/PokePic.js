import styles from "./PokePic.module.css";

const PokePic = ({ source }) => {
  return (
    <div className={styles.frame}>
      <img src={source} alt="pokemon pic"></img>
    </div>
  );
};

export default PokePic;
