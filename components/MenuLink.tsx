import React from "react";
import styles from "../styles/Home.module.scss";

interface MenuLinkProps {
  href: string;
  title: string;
}

export default function MenuLink({ href, title }: MenuLinkProps) {
  return (
    <a href={href} className={styles.menuLink}>
      {title}
    </a>
  );
}
