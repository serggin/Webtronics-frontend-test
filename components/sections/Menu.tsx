import React from "react";
import styles from "../../styles/Home.module.scss";
import MenuLink from "../MenuLink";

const links: [string, string][] = [
  ["About", "#aboutUs"],
  ["Programs", "#progTechs"],
  ["Steps", "#steps"],
  ["Questions", "#faqs"],
  ["Get in touch", "#contactUs"],
];

export default function Menu() {
  return (
    <nav className={styles.menu}>
      {" "}
      {links.map((link) => (
        <MenuLink title={link[0]} href={link[1]} key={link[0]} />
      ))}
    </nav>
  );
}
