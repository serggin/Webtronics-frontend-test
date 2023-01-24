import React from "react";
import styles from "../styles/Home.module.scss";

interface SocialButtonProps {
  type: "facebook" | "unknown" | "twitter" | "linkedin";
  href: string;
}

export default function ArrowButton({ type, href }: SocialButtonProps) {
  return (
    <a href={href} className={styles[type]} target="_blank">
      {" "}
    </a>
  );
}
