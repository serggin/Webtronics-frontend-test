import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import leftLine from "../assets/images/StepLeftLine.svg";
import rightLine from "../assets/images/StepRightLine.svg";

export interface StepProps {
  index: number;
  title: string;
  text: string;
}

export default function Step({ index, title, text }: StepProps) {
  const outerStyle = index % 2 ? styles.stepLeft : styles.stepRight;
  const lineStyle = index % 2 ? styles.lineLeft : styles.lineRight;
  const stroke = index % 2 ? leftLine : rightLine;
  return (
    <div className={styles.wrapper}>
      <div className={outerStyle}>
        <div className={styles.stepInner}>
          <h3>{`Step ${index}`}</h3>
          <h4>{title}</h4>
          <div className={styles.text}>{text}</div>
        </div>
        <Image src={stroke} className={lineStyle} alt="" />
      </div>
    </div>
  );
}
