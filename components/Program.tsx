import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "../styles/Home.module.scss";
import subtract from "../assets/images/Subtract.svg";

export interface ProgramProps {
  logo: StaticImageData;
  title: string;
}

export default function Program({ logo, title }: ProgramProps) {
  return (
    <div className={styles.program}>
      <Image src={subtract} className={styles.subtract} alt="" />
      <Image src={logo} className={styles.logo} alt="" />
      <div className={styles.title}>{title}</div>
    </div>
  );
}
