import React from "react";
import styles from "../styles/Home.module.scss";

export interface FaqProps {
  question: string;
  answer: string;
  index?: number;
  toggleOpen?: (index: number) => void;
  isOpen?: boolean;
}

export default function Faq({
  question,
  answer,
  index = -1,
  toggleOpen,
  isOpen = false,
}: FaqProps) {
  const faqStyle = isOpen ? styles.faqExpanded : styles.faqCollapsed;
  const iconStyle = isOpen ? styles.open : styles.close;
  const textsStyle = isOpen ? "" : styles.faqTextsClosed;
  const onClick = () => {
    toggleOpen && toggleOpen(index);
  };
  return (
    <div className={`${styles.faq} ${faqStyle}`} onClick={onClick}>
      <div className={`${styles.faqIcon} ${iconStyle}`} />
      <div className={styles.faqTexts}>
        <h3>{question}</h3>
        {isOpen && <div className={styles.answer}>{answer}</div>}
      </div>
    </div>
  );
}
