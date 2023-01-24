import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import frontImage from "../assets/images/Front-End (Stroke).svg";

export default function FrontStroke() {
  return <Image src={frontImage} className={styles.frontStroke} alt="" />;
}
