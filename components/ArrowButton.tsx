import React from "react";
import styles from "../styles/Home.module.scss";

interface ArrowButtonProps {
  type: "left" | "right";
  onClick: () => void;
}

export default function ArrowButton({ type, onClick }: ArrowButtonProps) {
  const style =
    type === "left" ? styles.arrawButtonLeft : styles.arrawButtonRight;
  return <div className={style} onClick={onClick} />;
}
