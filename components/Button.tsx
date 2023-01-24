import React from "react";
import styles from "../styles/Home.module.scss";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
  style?: object;
}

export default function Button({
  title,
  onClick = () => {},
  type = "button",
  style = {},
}: ButtonProps) {
  return (
    <button
      type={type}
      className={styles.button}
      style={style}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
