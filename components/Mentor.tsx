import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import ellipse from "../assets/images/Ellipse 132 (Stroke).svg";

export interface MentorProps {
  photo: string;
  name: string;
  text: string;
  style?: object;
}

export default function Mentor({ photo, name, text, style = {} }: MentorProps) {
  const photoStyle = {
    backgroundImage: `url('${photo}')`,
  };
  return (
    <div className={styles.mentor} style={style}>
      <div className={styles.photo} style={photoStyle}></div>
      <Image src={ellipse} className={styles.ellipse} alt="" />
      <h4>{name}</h4>
      <div className={styles.text}>{text}</div>
    </div>
  );
}
