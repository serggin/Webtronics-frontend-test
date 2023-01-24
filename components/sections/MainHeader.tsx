import React from "react";
import Button from "../Button";
import styles from "../../styles/Home.module.scss";

export default function MainHeader() {
  return (
    <div className={styles.mainHeader}>
      <h1>Front-End Developer Cources</h1>
      <div className={styles.frontend}>Front-End</div>
      <div className={styles.mainHeaderText}>
        {`Make UIs and websites beautiful, functional, 
and fast. Cover all the topics that expensive
bootcamps teach (and more).`}
      </div>
      <div className={styles.developer}>Developer</div>
      <div className={styles.cources}>Cources</div>
      <div className={styles.startButton}>
        <Button title={"Start my career change"} onClick={() => {}} />
      </div>
    </div>
  );
}
