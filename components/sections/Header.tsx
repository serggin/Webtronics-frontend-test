import React from "react";
import styles from "../../styles/Home.module.scss";
import Logo from "../Logo";
import Menu from "./Menu";

export default function Header() {
  return (
    <div className={styles.topBlock}>
      <Logo />
      <Menu />
    </div>
  );
}
