import React from "react";
import styles from "../../styles/Home.module.scss";
import Programs from "./Programs";

export default function ProgTechs() {
  return (
    <div id="progTechs" className={styles.progTechs}>
      <h2>Programming technologies</h2>
      <div className={styles.progTechsText}>
        {`By the end, you’ll have the portfolio and interview skills 
you need to start your new career.`}
      </div>
      <Programs />
    </div>
  );
}
