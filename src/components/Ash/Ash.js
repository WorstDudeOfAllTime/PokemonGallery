import ash from "../../img/ash.png";
import styles from "./Ash.module.css";
import { useState } from "react";
import React from "react";
const Ash = ({ top, left }) => {
  return (
    <div>
      <img
        style={{ top: `${top}px`, left: `${left}px` }}
        className={styles.ash}
        src={ash}
      />
    </div>
  );
};

export default Ash;
