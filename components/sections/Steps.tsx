import React from "react";
import styles from "../../styles/Home.module.scss";
import StepsGroup from "./StepsGroup";

export default function Steps() {
  return (
    <div id="steps" className={styles.steps}>
      <h2>Steps</h2>
      <StepsGroup />
    </div>
  );
}
