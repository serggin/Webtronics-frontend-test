import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import logo from "../assets/images/logo.svg";

export default function Logo() {
  return <Image src={logo} className={styles.logo} alt="logo" />;
}
