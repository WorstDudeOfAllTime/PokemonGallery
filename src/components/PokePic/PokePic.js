import styles from './PokePic.module.css';

const PokePic = ({ source }) => {
  return (
    <div className={styles.frame}>
      <div className={styles.background}>
        <img className={styles.displayPic} src={source} alt="pokemon pic"></img>
      </div>
    </div>
  );
};

export default PokePic;
