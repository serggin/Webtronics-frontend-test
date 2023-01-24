import React from "react";
import styles from "../../styles/Home.module.scss";
import Mentors from "./Mentors";

export default function AboutUs() {
  return (
    <div id="aboutUs" className={styles.aboutUs}>
      <h2>About Us</h2>
      <Mentors />
      <div className={styles.aboutUsText}>
        {`Front-end engineers work closely with designers to make 
websites beautiful, functional, and fast. This Career Path will 
teach you not only the necessary languages and technologies, 
but how to think like a front-end engineer, too.`}
      </div>
    </div>
  );
}
